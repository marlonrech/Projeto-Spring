package tech.devinhouse.Projeto2Mod2.DAO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.devinhouse.Projeto2Mod2.Model.Medicamento;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicamentoDAO {

    private int status_code;
    private String mensagem;
    private Medicamento dados;
}
