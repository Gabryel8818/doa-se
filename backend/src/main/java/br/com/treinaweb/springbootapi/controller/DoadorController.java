package br.com.treinaweb.springbootapi.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.treinaweb.springbootapi.entity.Doador;
import br.com.treinaweb.springbootapi.repository.DoadorRepository;
import lombok.extern.java.Log;

@RestController
@Log
public class DoadorController {
	
	private final static String FIND_ALL = "Realizando consulta de todos os Doador...";
	private final static String FIND_BY_ID = "Consultando Doador especifico:";
	private final static String SAVE_DOADOR = "Salvando Doador na base. ";
	private final static String UPDATE_DOADOR = "Atualizando Doador! ";
	private final static String NOT_FOUND_DOADOR = "Doador não encontrado! ";
	private final static String DELETE_DOADOR = "Doador deletado da base!";

	@Autowired
	private DoadorRepository _doadorRepository;

	@RequestMapping(value = "/doador", method = RequestMethod.GET, produces = "application/json")
	public List<Doador> Get() {
		log.info(FIND_ALL);
		return _doadorRepository.findAll();
	}

	@RequestMapping(value = "/doador/{email}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<Doador> GetByEmail(@PathVariable(value = "email") String email) {
		Optional<Doador> dbv = _doadorRepository.findByEmail(email);
		if (dbv.isPresent()) {
			log.info(FIND_BY_ID + email);
			return new ResponseEntity<Doador>(dbv.get(), HttpStatus.OK);
		} else
			log.info(NOT_FOUND_DOADOR);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "/doador", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public Doador Post(@Valid @RequestBody Doador dbv) {
		log.info(SAVE_DOADOR + dbv.toString());
		return _doadorRepository.save(dbv);
	}

	@Transactional
	@RequestMapping(value = "/doador/{id}", method = RequestMethod.PUT, produces = "application/json", consumes = "application/json")
	public ResponseEntity<Doador> Put(@PathVariable(value = "id") long id,
			@Valid @RequestBody Doador novoDbv) {
		Optional<Doador> oldDbv = _doadorRepository.findById(id);
		if (oldDbv.isPresent()) {
			Doador dbv = oldDbv.get();
			dbv.setNome(novoDbv.getNome());
			log.info(UPDATE_DOADOR + dbv.toString());
			_doadorRepository.save(dbv);
			return new ResponseEntity<Doador>(dbv, HttpStatus.OK);
		} else
			log.info(NOT_FOUND_DOADOR + oldDbv.toString());
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "/doador/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id) {
		Optional<Doador> dbv = _doadorRepository.findById(id);
		if (dbv.isPresent()) {
			_doadorRepository.delete(dbv.get());
			log.info(DELETE_DOADOR);
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			log.info(NOT_FOUND_DOADOR);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
}