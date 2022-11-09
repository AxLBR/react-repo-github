import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const handleSearchRepo = async () => {
    const {data} = await api.get(`users/${currentUser}/repos`).catch(() => {
      return 'undefined';
   });

    if (data == undefined){
      setError('Usuário não encontrado !');
      setRepos([]);
    } else {
      let newData = data.filter((e) => (e.name.toLowerCase() != currentUser.toLowerCase()));

      setError('');
      setRepos(newData);
      setCurrentUser('');
    }      
  }

  const handleRemoveRepo = (id) => {
    let newRepo = repos.filter((e) => (e.id != id));
    setRepos(newRepo);
  }

  return (
    <Container>
      <Container className='header'>
        <img src={gitLogo} width={100} height={100} alt="github logo"/>
        <Input value={currentUser} onChange={(e) => setCurrentUser(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? handleSearchRepo() : ''}/>
        <Button onClick={handleSearchRepo}/>
      </Container>

      <p className='error'>{error}</p> 
      <div className='containerRepos'>
        {repos.map(repo => <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
      </div>
    </Container>
  );
}

export default App;