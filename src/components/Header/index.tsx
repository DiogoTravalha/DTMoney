import * as Dialog from "@radix-ui/react-dialog";
import NewTransactionModal from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="./imgs/logo.png" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton>Nova Transação</NewTransationButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
