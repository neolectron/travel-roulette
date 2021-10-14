import { gql } from '@apollo/client';

export default gql`
  query CountriesAndContinents {
    countries {
      code
      name
    }
    continents {
      code
      name
    }
  }
`;
