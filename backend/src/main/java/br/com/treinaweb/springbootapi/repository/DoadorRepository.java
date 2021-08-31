package br.com.treinaweb.springbootapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.treinaweb.springbootapi.entity.Doador;

@Repository
public interface DoadorRepository extends JpaRepository<Doador, Long>{

	Optional<Doador> findByEmail(String email);

}
