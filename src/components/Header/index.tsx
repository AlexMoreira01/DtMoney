import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>

        <img src={logoImg} alt="" />

        <Dialog.Root>
          {/* aschild ira mudar para que o dialog trigger não crie um novo botão e utilize 
          o botao dentro da tag que ele esta */}
          <Dialog.Trigger asChild>

            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay>
              <Dialog.Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>

      </HeaderContent>

    </HeaderContainer>
  )
}