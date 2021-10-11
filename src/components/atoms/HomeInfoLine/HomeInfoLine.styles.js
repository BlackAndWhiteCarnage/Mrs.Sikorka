import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30%;
  height: 3px;
  background: ${({ theme }) => theme.colors.beigeDark3};
  border-radius: ${({ theme }) => theme.borderRadius.radius};
`;
