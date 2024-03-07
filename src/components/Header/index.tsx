import * as S from './styles';

export default function Header() {
  return (
    <header>
      <S.LogoContainer>
        <img
          src="santex-logo-dark.svg"
          width={73}
          height={16}
          alt="logo"
        />
        <div>$ 0</div>
      </S.LogoContainer>
    </header>
  );
}
