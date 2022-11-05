import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1667513993054-9335374c6b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/Thalesousa.png" />

        <strong>Thales Sousa</strong>
        <span>Front End Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}