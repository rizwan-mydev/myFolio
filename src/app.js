import Header from './components/Header';
import About from './components/About';
import Info from './components/Info';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

async function App() {
    const template = document.createElement('template');

    template.innerHTML = `
    ${Header()}
    <main class="content-wrapper">
      ${About()}
      ${Info()}
      ${Portfolio()}
    </main>
    ${Footer()}

  `;
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;
