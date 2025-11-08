const defaultConfig = {
  background_color: '#FFF9E6',
  surface_color: '#FFEDD5',
  text_color: '#92400E',
  primary_action_color: '#FBBF24',
  secondary_action_color: '#FB923C',
  font_family: 'Inter',
  font_size: 15,
  main_title: 'Serviços da Agência',
  card1_title: 'Suporte Humanizado',
  card1_text: 'Acompanhamento individual, dicas diárias e suporte real para seu crescimento.',
  card2_title: 'Premiações & Benefícios',
  card2_text: 'Recompensas exclusivas, bônus e vantagens mensais para nossos streamers.',
  card3_title: 'Métodos de Crescimento',
  card3_text: 'Estratégias testadas para evolução rápida e sustentável nas plataformas.',
  card4_title: 'Treinamentos Profissionais',
  card4_text: 'Aprendizados práticos com base no mercado e na experiência da agência.',
  card5_title: 'Eventos Mensais da Agência',
  card5_text: 'Atividades exclusivas e interativas para engajamento e evolução.'
};

async function onConfigChange(config) {
  const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;

  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const bgColor = config.background_color || defaultConfig.background_color;
    const surfaceColor = config.surface_color || defaultConfig.surface_color;
    card.style.background = `linear-gradient(135deg, ${bgColor} 0%, ${surfaceColor} 100%)`;
    
    const borderColor = config.secondary_action_color || defaultConfig.secondary_action_color;
    card.style.borderColor = `${borderColor}40`;
  });

  const cardBeforeStyle = document.createElement('style');
  cardBeforeStyle.textContent = `
    .card::before {
      background: linear-gradient(90deg, ${config.primary_action_color || defaultConfig.primary_action_color} 0%, ${config.secondary_action_color || defaultConfig.secondary_action_color} 100%) !important;
    }
  `;
  document.head.appendChild(cardBeforeStyle);

  const iconWrappers = document.querySelectorAll('.icon-wrapper');
  iconWrappers.forEach(wrapper => {
    const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
    const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;
    wrapper.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
  });

  const mainTitle = document.getElementById('main-title');
  mainTitle.style.fontFamily = `${customFont}, ${baseFontStack}`;

  const titles = document.querySelectorAll('.card-title');
  titles.forEach(title => {
    title.style.color = config.text_color || defaultConfig.text_color;
    title.style.fontSize = `${baseSize * 1.33}px`;
  });

  const texts = document.querySelectorAll('.card-text');
  texts.forEach(text => {
    text.style.color = config.text_color || defaultConfig.text_color;
    text.style.fontSize = `${baseSize}px`;
  });

  document.getElementById('main-title').textContent = config.main_title || defaultConfig.main_title;
  document.getElementById('card1-title').textContent = config.card1_title || defaultConfig.card1_title;
  document.getElementById('card1-text').textContent = config.card1_text || defaultConfig.card1_text;
  document.getElementById('card2-title').textContent = config.card2_title || defaultConfig.card2_title;
  document.getElementById('card2-text').textContent = config.card2_text || defaultConfig.card2_text;
  document.getElementById('card3-title').textContent = config.card3_title || defaultConfig.card3_title;
  document.getElementById('card3-text').textContent = config.card3_text || defaultConfig.card3_text;
  document.getElementById('card4-title').textContent = config.card4_title || defaultConfig.card4_title;
  document.getElementById('card4-text').textContent = config.card4_text || defaultConfig.card4_text;
  document.getElementById('card5-title').textContent = config.card5_title || defaultConfig.card5_title;
  document.getElementById('card5-text').textContent = config.card5_text || defaultConfig.card5_text;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: (value) => {
          config.primary_action_color = value;
          window.elementSdk.setConfig({ primary_action_color: value });
        }
      },
      {
        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
        set: (value) => {
          config.secondary_action_color = value;
          window.elementSdk.setConfig({ secondary_action_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ['main_title', config.main_title || defaultConfig.main_title],
    ['card1_title', config.card1_title || defaultConfig.card1_title],
    ['card1_text', config.card1_text || defaultConfig.card1_text],
    ['card2_title', config.card2_title || defaultConfig.card2_title],
    ['card2_text', config.card2_text || defaultConfig.card2_text],
    ['card3_title', config.card3_title || defaultConfig.card3_title],
    ['card3_text', config.card3_text || defaultConfig.card3_text],
    ['card4_title', config.card4_title || defaultConfig.card4_title],
    ['card4_text', config.card4_text || defaultConfig.card4_text],
    ['card5_title', config.card5_title || defaultConfig.card5_title],
    ['card5_text', config.card5_text || defaultConfig.card5_text]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}
