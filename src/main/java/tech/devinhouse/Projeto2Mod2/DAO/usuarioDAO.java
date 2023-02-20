package tech.devinhouse.Projeto2Mod2.DAO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.devinhouse.Projeto2Mod2.Model.Usuario;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class usuarioDAO {

    private int statusCode;
    private String mensagem;
    private Usuario dados;
}
