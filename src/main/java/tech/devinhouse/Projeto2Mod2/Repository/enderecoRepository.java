package tech.devinhouse.Projeto2Mod2.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.devinhouse.Projeto2Mod2.Model.Endereco;
import tech.devinhouse.Projeto2Mod2.Model.Farmacia;

@Repository
public interface enderecoRepository extends JpaRepository<Endereco,Long> {

}
