package br.com.treinaweb.springbootapi.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Getter
@Setter
@Table(name = "receptor")
public class Receptor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_receptor;
	private String nome;
	private String telefone;
	private String email;
	private String cep;
	private String estado;
	private String cidade;
	private String logradouro;

}
