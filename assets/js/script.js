// EDITE SOMENTE OS DADOS ABAIXO PARA ATUALIZAR O SITE.

const services = [
  {
    icon: "🛡️",
    title: "Diagnóstico Digital",
    text: "Análise de equipamentos, rede, organização, riscos e oportunidades de melhoria."
  },
  {
    icon: "🔐",
    title: "Cibersegurança Básica",
    text: "Orientação sobre senhas, backup, golpes, WhatsApp, e-mail e proteção de dispositivos."
  },
  {
    icon: "🌐",
    title: "Presença Digital",
    text: "Sites institucionais, cardápio digital, Google Meu Negócio e organização de canais online."
  },
  {
    icon: "💻",
    title: "Suporte Técnico",
    text: "Apoio remoto ou presencial para computadores, impressoras, programas e conectividade."
  },
  {
    icon: "📋",
    title: "Organização de Processos",
    text: "Checklists, rotinas, inventário, documentação e melhoria do uso da tecnologia."
  },
  {
    icon: "📈",
    title: "Soluções para Crescimento",
    text: "Projetos simples para melhorar atendimento, divulgação, controle e produtividade."
  }
];

const hubServices = [
  { title: "Análise e diagnóstico", text: "Levantamento da situação atual e definição das prioridades." },
  { title: "Plano de ação", text: "Recomendações organizadas por urgência, impacto e custo." },
  { title: "Implantação", text: "Execução das melhorias aprovadas pelo cliente." },
  { title: "Acompanhamento", text: "Suporte periódico e revisão das medidas implementadas." },
  { title: "Divulgação de clientes", text: "Espaço no site para logomarcas, fotos e apresentação de parceiros." }
];

// Para usar uma foto real, coloque o arquivo na pasta assets/images
// e informe o caminho em image, por exemplo: "assets/images/padaria.jpg".
const clients = [
  {
    name: "Cliente em destaque",
    category: "Comércio local",
    description: "Espaço reservado para apresentar um estabelecimento atendido pela JL.",
    image: ""
  },
  {
    name: "Parceiro JL",
    category: "Serviços",
    description: "Adicione aqui a logomarca, uma foto e uma pequena descrição do parceiro.",
    image: ""
  },
  {
    name: "Seu negócio aqui",
    category: "Divulgação",
    description: "Vitrine para fortalecer a presença digital dos clientes da JL.",
    image: ""
  }
];

function renderServices() {
  const grid = document.querySelector("#servicesGrid");
  grid.innerHTML = services.map(service => `
    <article class="service-card">
      <div class="service-icon" aria-hidden="true">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
    </article>
  `).join("");
}

function renderHub() {
  const list = document.querySelector("#hubList");
  list.innerHTML = hubServices.map((item, index) => `
    <article class="hub-item">
      <div class="hub-number">${String(index + 1).padStart(2, "0")}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>
  `).join("");
}

function renderClients() {
  const grid = document.querySelector("#clientsGrid");
  grid.innerHTML = clients.map(client => `
    <article class="client-card">
      <div class="client-image">
        ${client.image
          ? `<img src="${client.image}" alt="${client.name}">`
          : `<div class="client-placeholder">JL</div>`}
      </div>
      <div class="client-content">
        <span class="eyebrow">${client.category}</span>
        <h3>${client.name}</h3>
        <p>${client.description}</p>
      </div>
    </article>
  `).join("");
}

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});


// Botão do rodapé: volta ao topo de forma confiável.
const backToTop = document.querySelector("#backToTop");

if (backToTop) {
  backToTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

document.querySelector("#currentYear").textContent = new Date().getFullYear();

renderServices();
renderHub();
renderClients();
