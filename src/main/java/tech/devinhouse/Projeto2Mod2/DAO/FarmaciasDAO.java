package tech.devinhouse.Projeto2Mod2.DAO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.devinhouse.Projeto2Mod2.Model.Farmacia;
import tech.devinhouse.Projeto2Mod2.Model.Medicamento;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FarmaciasDAO {

    private int status_code;
    private String mensagem;
    private List<Farmacia> dados;
}
