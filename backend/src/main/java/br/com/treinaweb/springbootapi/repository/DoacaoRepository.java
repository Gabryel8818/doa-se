package br.com.treinaweb.springbootapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.treinaweb.springbootapi.entity.Doacao;

@Repository
public interface DoacaoRepository extends JpaRepository<Doacao, Long>{

	
	@Transactional
	@Query(value = "SELECT * FROM doaseunasp.doacao doacao \r\n"
			+ "	inner join doaseunasp.doador doador on doacao.id_doacao = doador.id_doador\r\n"
			+ "where doacao.id_doacao = :id and doador.cpf = :cpf\r\n"
			+ "order by doador.cpf desc\r\n"
			+ "\r\n"
			+ " ", nativeQuery = true)
	Optional <Doacao> findByIdAndDoadorCpf(@Param("id") Long id, @Param("cpf") Long cpf);

}
