package tech.devinhouse.Projeto2Mod2.Feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(url="https://viacep.com.br/ws/", name="viacep")
public interface buscacep {
    @GetMapping("{cep}/json")
    EnderecoFeign cep(@PathVariable("cep") String cep);
}
