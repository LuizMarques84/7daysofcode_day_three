function jogoCarreiraDev() {
    alert("Bem-vindo ao Jogo da Carreira Dev!");
  
    let area;
    let areaValida = false;
  
    // Loop para garantir que a área seja escolhida corretamente
    while (!areaValida) {
      area = prompt("Você quer seguir para Front-End ou Back-End?");
      if (area && (area.toLowerCase() === "front-end" || area.toLowerCase() === "back-end")) {
        areaValida = true;
      } else {
        alert("Opção inválida. Por favor, escolha Front-End ou Back-End.");
      }
    }
  
    let tecnologia;
    if (area.toLowerCase() === "front-end") {
      tecnologia = prompt("Você quer aprender React ou Vue?");
    } else {
      tecnologia = prompt("Você quer aprender C# ou Java?");
    }
  
    let especializacao = prompt("Você quer se especializar na área escolhida ou se tornar Fullstack?");
  
    let tecnologiasAdicionais = [];
    let continuar = true;
  
    while (continuar) {
      let tecnologiaAdicional = prompt("Qual tecnologia você gostaria de aprender?");
      tecnologiasAdicionais.push(tecnologiaAdicional);
  
      let resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (sim/não)");
      if (resposta.toLowerCase() !== "sim") {
        continuar = false;
      }
    }
  
    // Exibir o relatório completo
    let relatorio = `
      Área escolhida: ${area}
      Tecnologia escolhida: ${tecnologia}
      Especialização: ${especializacao}
      Tecnologias adicionais: ${tecnologiasAdicionais.join(", ")}
    `;
  
    alert("Relatório da sua carreira Dev:\n" + relatorio);
  }
  
  jogoCarreiraDev();