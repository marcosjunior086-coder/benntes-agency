// Dados de configuração padrão que estavam no seu script original
const defaultConfig = {
  background_color: '#FFF9E6',
  surface_color: '#FFEDD5',
  text_color: '#92400E',
  primary_action_color: '#FBBF24',
  secondary_action_color: '#FB923C',
  font_family: 'Inter',
  font_size: 14,
  block1_title: 'Políticas e Normas da Plataforma',
  doc1_title: 'Políticas de Hosts',
  doc1_desc: 'Regras e diretrizes para hosts da plataforma',
  doc1_link: 'https://drive.google.com/file/d/1aSb7W-5jnI6AmMLJ5tknojbsSvf9kmrA/view',
  doc2_title: 'Políticas Premium',
  doc2_desc: 'Benefícios exclusivos e regras para membros premium',
  doc2_link: 'https://drive.google.com/file/d/1NqoMEEtE_ZZ2SIy_MnjOKR9wCwRikjOz/view',
  doc3_title: 'Diretrizes da Plataforma',
  doc3_desc: 'Orientações gerais para streamers da agência',
  doc3_link: 'https://drive.google.com/file/d/1g7kRKLaPoEO_RY8QQ_W82-f29m9ncJGi/view',
  block2_title: 'Incentivos da Agência',
  doc4_title: 'Premiações da Agência',
  doc4_desc: 'Sistema de recompensas e incentivos mensais',
  doc4_link: 'https://drive.google.com/file/d/1_NmVBlZP4SVkKVlh5o1HCYrcedRauJj6/view',
  doc5_title: 'vazio',
  doc5_desc: 'vazio',
  doc5_link: ''
};

// Esta função preenche a página com os dados
function onConfigChange(config) {
  const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;

  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  const cards = document.querySelectorAll('.doc-card');
  cards.forEach(card => {
    const bgColor = config.background_color || defaultConfig.background_color;
    const surfaceColor = config.surface_color || defaultConfig.surface_color;
    card.style.background = `linear-gradient(135deg, ${bgColor} 0%, ${surfaceColor} 100%)`;
    
    const borderColor = config.secondary_action_color || defaultConfig.secondary_action_color;
    card.style.borderColor = `${borderColor}40`; // 40 é a transparência
  });

  // Adiciona estilos dinâmicos na cabeça do documento
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .doc-card::before {
      background: linear-gradient(90deg, ${config.primary_action_color || defaultConfig.primary_action_color} 0%, ${config.secondary_action_color || defaultConfig.secondary_action_color} 100%) !important;
    }
  `;
  document.head.appendChild(styleElement);

  const iconWrappers = document.querySelectorAll('.icon-wrapper');
  iconWrappers.forEach(wrapper => {
    const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
    const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;
    wrapper.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
  });

  const blockTitles = document.querySelectorAll('.block-title');
  blockTitles.forEach(blockTitle => {
    blockTitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
  });

  const titles = document.querySelectorAll('.doc-title');
  titles.forEach(title => {
    title.style.color = config.text_color || defaultConfig.text_color;
    title.style.fontSize = `${baseSize * 1.21}px`;
  });

  const descs = document.querySelectorAll('.doc-desc');
  descs.forEach(desc => {
    desc.style.color = config.text_color || defaultConfig.text_color;
    desc.style.fontSize = `${baseSize * 0.93}px`;
  });

  const buttons = document.querySelectorAll('.doc-button');
  buttons.forEach(button => {
    button.style.fontSize = `${baseSize}px`;
  });

  // Preenche os textos e links
  document.getElementById('block1-title').textContent = config.block1_title || defaultConfig.block1_title;
  document.getElementById('block2-title').textContent = config.block2_title || defaultConfig.block2_title;
  
  document.getElementById('doc1-title').textContent = config.doc1_title || defaultConfig.doc1_title;
  document.getElementById('doc1-desc').textContent = config.doc1_desc || defaultConfig.doc1_desc;
  document.getElementById('doc1-button').href = config.doc1_link || defaultConfig.doc1_link;
  
  document.getElementById('doc2-title').textContent = config.doc2_title || defaultConfig.doc2_title;
  document.getElementById('doc2-desc').textContent = config.doc2_desc || defaultConfig.doc2_desc;
  document.getElementById('doc2-button').href = config.doc2_link || defaultConfig.doc2_link;
  
  document.getElementById('doc3-title').textContent = config.doc3_title || defaultConfig.doc3_title;
  document.getElementById('doc3-desc').textContent = config.doc3_desc || defaultConfig.doc3_desc;
  document.getElementById('doc3-button').href = config.doc3_link || defaultConfig.doc3_link;
  
  document.getElementById('doc4-title').textContent = config.doc4_title || defaultConfig.doc4_title;
  document.getElementById('doc4-desc').textContent = config.doc4_desc || defaultConfig.doc4_desc;
  document.getElementById('doc4-button').href = config.doc4_link || defaultConfig.doc4_link;
  
  document.getElementById('doc5-title').textContent = config.doc5_title || defaultConfig.doc5_title;
  document.getElementById('doc5-desc').textContent = config.doc5_desc || defaultConfig.doc5_desc;
  document.getElementById('doc5-button').href = config.doc5_link || defaultConfig.doc5_link;
}

// --- MUDANÇA PRINCIPAL ---
// Espera o HTML da página carregar e então executa a função 
// para preencher a página com os dados padrão.
document.addEventListener('DOMContentLoaded', () => {
  onConfigChange(defaultConfig);
});
