import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



//docker tag 0e80eef8d944 registry.heroku.com/iiitsbankapp/ngnix
//docker tag 0bcbeb494bed registry.heroku.com/iiitsbankapp/mongo
//docker tag 0fcdccc16032 registry.heroku.com/iiitsbankapp/front
//docker tag 41ce94ca405e registry.heroku.com/iiitsbankapp/api

//heroku container:push registry.heroku.com/iiitsbankapp/ngnix
//docker push registry.heroku.com/iiitsbankapp/mongo
//dockerpush registry.heroku.com/iiitsbankapp/front
//heroku container:push registry.heroku.com/iiitsbankapp/api

//heroku container:release ngnix -a iiitsbankapp
