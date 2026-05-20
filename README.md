# SaúdeAmiga - App de Teste para Automação 🏥

Este aplicativo foi desenvolvido especificamente para fins didáticos e de **testes de automação**. Ele simula uma interface de cadastro de uma plataforma de saúde chamada "SaúdeAmiga", oferecendo um ambiente controlado e padronizado para a prática de scripts de automação móvel.

---

## ⚠️ Aviso Importante: Privacidade
**Este aplicativo NÃO armazena nenhuma informação.**
Todos os dados preenchidos no formulário (Nome, CPF, E-mail, etc.) são processados apenas localmente na memória temporária do dispositivo para simular o comportamento de envio. Ao fechar o app ou clicar em "Voltar ao Início", os dados são descartados. **Não há conexão com bancos de dados ou servidores externos.**

---

## 🚀 Tecnologias Utilizadas

O projeto utiliza uma arquitetura híbrida moderna para garantir leveza e facilidade de manutenção:

- **Android Nativo (Kotlin):** Utilizado para a estrutura base do aplicativo, gerenciamento de ciclo de vida e renderização de alta performance.
- **WebView:** Componente que permite carregar uma interface web rica dentro do ambiente nativo.
- **Frontend Moderno:** 
  - **HTML5 & CSS3:** Estrutura e design responsivo com estética "Card Design".
  - **JavaScript (Vanilla):** Lógica de máscaras de campo (CPF) e validações em tempo real.
- **Google Fonts (Inter):** Tipografia focada em legibilidade e clareza.
- **Material Design Icons:** Ícones padronizados para facilitar o reconhecimento visual das funções.

---

## 🛠️ Estrutura para Automação

O aplicativo foi construído pensando no desenvolvedor de testes (QA). Todos os elementos críticos possuem **IDs únicos e estáveis**, facilitando a localização via Appium, Selenium ou ferramentas similares.

### Principais Seletores (IDs):
| Campo | ID do Input | ID da Mensagem de Erro |
| :--- | :--- | :--- |
| **Nome** | `firstName` | `firstName-error` |
| **Sobrenome** | `lastName` | `lastName-error` |
| **CPF** | `cpf` | `cpf-error` |
| **E-mail** | `email` | `email-error` |
| **Data Nasc.** | `dtnasc` | `dtnasc-error` |
| **Botão Enviar** | `submitBtn` | - |
| **Botão Sucesso**| `backBtn` | - |

---

## 🎨 Identidade Visual e UX

Como um especialista em UX (User Experience) participou do design, o app conta com:
- **Máscaras Automáticas:** O campo de CPF formata os pontos e traços enquanto o usuário digita.
- **Feedback de Erro:** Mensagens claras que aparecem logo abaixo do campo quando a validação falha.
- **Teclado Inteligente:** A tela se ajusta automaticamente (`adjustResize`) para que o teclado não cubra o formulário.
- **Ícone de Saúde:** O ícone do app na tela inicial do celular apresenta um escudo com uma cruz, simbolizando cuidado e segurança.

---

## 📥 Como Instalar e Rodar

1.  **APK de Debug:** O instalador está disponível na pasta:
    `app/build/outputs/apk/debug/app-debug.apk`
2.  **Instalação:** Basta transferir o arquivo para um dispositivo Android ou Emulador e clicar para instalar.
3.  **Permissões:** O app solicita permissão de **Internet** apenas para carregar os ícones e fontes externas.

---

## 📝 Licença e Objetivo
Este projeto é livre para uso em portfólios, estudos de QA e demonstrações de ferramentas de automação. Sinta-se à vontade para explorar a interface e quebrar o código para testar suas habilidades!

**Desenvolvido por Tiago Alves e Colaboracao.**
