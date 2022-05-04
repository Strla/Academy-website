import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderSpinner = styled(TailSpin)``;
