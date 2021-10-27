package br.com.treinaweb.springbootapi.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import br.com.treinaweb.springbootapi.entity.enums.CategoriaEnum;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "doacao")
@Getter
@ToString
@Setter
public class Doacao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long id_doacao;
	
	@JsonProperty("nome")
	private String nome;
	
	@JsonProperty("categoria")
	private CategoriaEnum categoria;
	
	@JsonProperty("ong")
	@OneToOne(cascade=CascadeType.PERSIST)
	private Ong ong;
	
	@JsonProperty("receptor")
	@OneToOne(cascade=CascadeType.PERSIST)
	private Receptor receptor;
	
	@JsonProperty("doador")
	@OneToOne(cascade=CascadeType.PERSIST)
	private Doador doador;

}
