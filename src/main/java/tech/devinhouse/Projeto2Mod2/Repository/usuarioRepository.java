package tech.devinhouse.Projeto2Mod2.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.devinhouse.Projeto2Mod2.Model.Usuario;

@Repository
public interface usuarioRepository extends JpaRepository<Usuario,Long> {

    Usuario findByEmailAndSenha(String email, String senha);
}
