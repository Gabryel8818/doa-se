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

import br.com.treinaweb.springbootapi.entity.Receptor;
import br.com.treinaweb.springbootapi.repository.ReceptorRepository;
import lombok.extern.java.Log;

@RestController
@Log
public class ReceptorController {

	private final static String FIND_ALL = "Realizando consulta de todos os Receptor...";
	private final static String FIND_BY_ID = "Consultando Receptor especifico:";
	private final static String SAVE_RECEPTOR = "Salvando Receptor na base. ";
	private final static String UPDATE_RECEPTOR = "Atualizando Receptor! ";
	private final static String NOT_FOUND_RECEPTOR = "Receptor não encontrado! ";
	private final static String DELETE_RECEPTOR = "Receptor deletado da base!";
	
	@Autowired
	private ReceptorRepository _receptorRepository;

	@RequestMapping(value = "/receptor", method = RequestMethod.GET, produces = "application/json")
	public List<Receptor> Get() {
		log.info(FIND_ALL);
		return _receptorRepository.findAll();
	}

	@RequestMapping(value = "/receptor/{id}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<Receptor> GetById(@PathVariable(value = "id") long id) {
		Optional<Receptor> dbv = _receptorRepository.findById(id);
		if (dbv.isPresent()) {
			log.info(FIND_BY_ID + id);
			return new ResponseEntity<Receptor>(dbv.get(), HttpStatus.OK);
		} else
			log.info(NOT_FOUND_RECEPTOR);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "/receptor", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public Receptor Post(@Valid @RequestBody Receptor dbv) {
		log.info(SAVE_RECEPTOR + dbv.toString());
		return _receptorRepository.save(dbv);
	}

	@Transactional
	@RequestMapping(value = "/receptor/{id}", method = RequestMethod.PUT, produces = "application/json", consumes = "application/json")
	public ResponseEntity<Receptor> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Receptor novoDbv) {
		Optional<Receptor> oldDbv = _receptorRepository.findById(id);
		if (oldDbv.isPresent()) {
			Receptor dbv = oldDbv.get();
			dbv.setName(novoDbv.getName());
			log.info(UPDATE_RECEPTOR + dbv.toString());
			_receptorRepository.save(dbv);
			return new ResponseEntity<Receptor>(dbv, HttpStatus.OK);
		} else
			log.info(NOT_FOUND_RECEPTOR + oldDbv.toString());
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "/receptor/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id) {
		Optional<Receptor> dbv = _receptorRepository.findById(id);
		if (dbv.isPresent()) {
			_receptorRepository.delete(dbv.get());
			log.info(DELETE_RECEPTOR);
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			log.info(NOT_FOUND_RECEPTOR);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

}