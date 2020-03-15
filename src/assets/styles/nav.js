import Styles from 'styled-components';

export const NavContainer = Styles.div`
  display: flex;
  margin: 30px auto;
  width: 90%;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;

export const UL = Styles.ul`
  list-style: none;
  display: flex;
`;

export const LI = Styles.li`
  color: #000;
  margin-right: 20px;
`