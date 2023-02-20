package tech.devinhouse.Projeto2Mod2.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.devinhouse.Projeto2Mod2.Model.Farmacia;
import tech.devinhouse.Projeto2Mod2.Model.Medicamento;

@Repository
public interface farmaciaRepository extends JpaRepository<Farmacia,Long> {

}
