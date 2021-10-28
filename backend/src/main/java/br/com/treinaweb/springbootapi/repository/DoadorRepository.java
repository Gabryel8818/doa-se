package br.com.treinaweb.springbootapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.treinaweb.springbootapi.entity.Doador;

@Repository
public interface DoadorRepository extends JpaRepository<Doador, Long>{

	@Query(value = "select * from doador where email = :email limit 1", nativeQuery = true)
	public Optional<Doador> findByEmail(@Param("email") String email);

}
