package br.com.treinaweb.springbootapi.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.treinaweb.springbootapi.entity.Doacao;
import br.com.treinaweb.springbootapi.repository.DoacaoRepository;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class DoacaoController {

	private final static String FIND_ALL = "Realizando consulta de todos os Doacao...";
	private final static String FIND_BY_ID = "Consultando Doacao especifico:";
	private final static String SAVE_DOACAO = "Salvando Doacao na base. ";
	private final static String NOT_FOUND_DOACAO = "Doacao não encontrado! ";
	private final static String DELETE_DOACAO = "Doacao deletado da base!";

	@Autowired
	private DoacaoRepository _doacaoRepository;

	@RequestMapping(value = "/doacao", method = RequestMethod.GET, produces = "application/json")
	public List<Doacao> Get() {
		log.info(FIND_ALL);
		return _doacaoRepository.findAll();
	}

	@RequestMapping(value = "/doacao/{id}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<Doacao> GetByEmail(@PathVariable(value = "id") long id) {
		Optional<Doacao> dbv = _doacaoRepository.findById(id);
		if (dbv.isPresent()) {
			log.info(FIND_BY_ID + id);
			return new ResponseEntity<Doacao>(dbv.get(), HttpStatus.OK);
		} else
			log.info(NOT_FOUND_DOACAO);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "/doacao", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public Doacao Post(@Valid @RequestBody Doacao dbv) {
		log.info(SAVE_DOACAO + dbv.toString());
		return _doacaoRepository.save(dbv);

	}

	@RequestMapping(value = "/doacao/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id) {
		Optional<Doacao> dbv = _doacaoRepository.findById(id);
		if (dbv.isPresent()) {
			_doacaoRepository.delete(dbv.get());
			log.info(DELETE_DOACAO);
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			log.info(NOT_FOUND_DOACAO);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

}