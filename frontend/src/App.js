import logo from './logo.svg';
import './App.css';

const gridItems = [
  { title: 'Branches', description: 'Abstract Branches lets you manage, version, and document your designs in one place.' },
  { title: 'Manage your account', description: 'Configure your account settings, such as your email, profile details, and password.' },
  { title: 'Manage organizations, teams, and projects', description: 'Use Abstract organizations, teams, and projects to organize your people and your work.' },
  { title: 'Manage billing', description: 'Change subscriptions and payment details.' },
  { title: 'Authenticate to Abstract', description: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.' },
  { title: 'Abstract support', description: 'Get in touch with a human.' }
]

function App() {
  return (
    <div className="container">
      <header>
        <span>Abstract | Help Center</span>
        <button >Submit a request</button>
      </header>

      <div className='banner-section'>
        <h1>How can we help ?</h1>
        <input type="text" placeholder='search' />
      </div>

      <div className='cards-section'>
        <div className='grid-container'>
          {
            gridItems.map((item, index) => (
              <div className='grid-item'>
                <div className='grid-item-title'>
                  Branches
                </div>
                <div className='grid-item-desciption'>
                  asdf asf asd asdf asga gagasg  asg asg agag asgasgasgasgagag ag agasgasg asgasg as
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <footer>
        <div className='footer-items-container'>
          <h3>About</h3>
          <h6>Branches</h6>
        </div>
        <div className='footer-items-container'>
          <h3>Resources</h3>
          <h6>Branches</h6>
        </div>
        <div className='footer-items-container'>
          <h3>Community</h3>
          <h6>Branches</h6>
        </div>
        <div className='footer-items-container'>
          <h3>Company</h3>
          <h6>Branches</h6>
        </div>
      </footer>
    </div>
  );
}

export default App;
