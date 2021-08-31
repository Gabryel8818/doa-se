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

import br.com.treinaweb.springbootapi.entity.Ong;
import br.com.treinaweb.springbootapi.repository.OngRepository;
import lombok.extern.java.Log;

@RestController
@Log
public class OngController {
	
	private final static String FIND_ALL = "Realizando consulta de todos os Ong...";
	private final static String FIND_BY_ID = "Consultando Ong especifico:";
	private final static String SAVE_ONG = "Salvando Ong na base. ";
	private final static String UPDATE_ONG = "Atualizando Ong! ";
	private final static String NOT_FOUND_ONG = "Ong não encontrado! ";
	private final static String DELETE_ONG = "Ong deletado da base!";
	
	@Autowired
	private OngRepository _ongRepository;

	@RequestMapping(value = "/ong", method = RequestMethod.GET, produces = "application/json")
	public List<Ong> Get() {
		log.info(FIND_ALL);
		return _ongRepository.findAll();
	}

	@RequestMapping(value = "/ong/{id}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<Ong> GetById(@PathVariable(value = "id") long id) {
		Optional<Ong> dbv = _ongRepository.findById(id);
		if (dbv.isPresent()) {
			log.info(FIND_BY_ID + id);
			return new ResponseEntity<Ong>(dbv.get(), HttpStatus.OK);
		} else
			log.info(NOT_FOUND_ONG);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "/ong", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public Ong Post(@Valid @RequestBody Ong dbv) {
		log.info(SAVE_ONG + dbv.toString());
		return _ongRepository.save(dbv);
	}

	@Transactional
	@RequestMapping(value = "/ong/{id}", method = RequestMethod.PUT, produces = "application/json", consumes = "application/json")
	public ResponseEntity<Ong> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Ong novoDbv) {
		Optional<Ong> oldDbv = _ongRepository.findById(id);
		if (oldDbv.isPresent()) {
			Ong dbv = oldDbv.get();
			dbv.setName(novoDbv.getName());
			log.info(UPDATE_ONG + dbv.toString());
			_ongRepository.save(dbv);
			return new ResponseEntity<Ong>(dbv, HttpStatus.OK);
		} else
			log.info(NOT_FOUND_ONG + oldDbv.toString());
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "/ong/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id) {
		Optional<Ong> dbv = _ongRepository.findById(id);
		if (dbv.isPresent()) {
			_ongRepository.delete(dbv.get());
			log.info(DELETE_ONG);
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			log.info(NOT_FOUND_ONG);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

}