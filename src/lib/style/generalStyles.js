import styled from "styled-components";
import { breakpoints, colors, fonts } from "./theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";
import { css } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 48px;

  @media (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 48px;
  }

  @media (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Button = styled.button`
  border: none;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 220px;
  background-color: ${colors.bgPrimary};
  color: ${colors.primary};
  border-radius: 30px;
  font-weight: 500;
  text-transform: uppercase;
  transition: box-shadow 0.2s ease-in-out;
  font-family: ${fonts.primary};

  &:hover {
    box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  ${(props) =>
    props.isSecondary &&
    `
    background-color: ${colors.primary};
    color: ${colors.secondary};
  `}

  ${(props) =>
    props.isNav &&
    `
    width: 150px;
  `}

  ${(props) =>
    props.isHeading &&
    `
     width: 200px;
  `}

   ${(props) =>
    props.isOutline &&
    `
     border: 1px solid ${colors.primary};
  `}

  ${(props) =>
    props.isForm &&
    `
    display: block;
    margin: 0 auto;
    width: 220px
  `}
`;

export const Main = styled.main``;

export const Form = styled(FormFormik)`
  @media (${breakpoints.tabletSmall}) {
    width: 400px;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }

  ${(props) =>
    props.isVisible &&
    `
    display: none;
  `}
`;

const FieldStyle = css`
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};

  &:focus {
    border-color: ${colors.textPrimary};
  }

  @media (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;
export const Field = styled(FieldFormik)`
  ${FieldStyle}
`;

export const Select = styled.select`
  ${FieldStyle}
`;

export const Option = styled.option``;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: ${colors.primary};
  padding-top: 8px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PasswordFormWrapper = styled.div`
  border-radius: 8px;
  padding: 24px;
  background-color: #f0f0f0;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 135px;

  ${(props) =>
    !props.isForm &&
    `
    width: 450px;
    height: 100%;
  `}

  @media (${breakpoints.desktop}) {
    width: 450px;
  }
`;

export const PasswordTitle = styled.h2`
  font-size: 16px;
  color: ${colors.textPrimary};
  margin-bottom: 32px;
  word-spacing: 2px;
`;

export const PasswordMessage = styled.p`
  font-size: 16px;
  color: ${colors.textSecondary};
  word-spacing: 2px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  @media (${breakpoints.tablet}) {
    flex-wrap: nowrap;
  }
`;

export const FormSuccessMessage = styled.p`
  padding: 12px;
  font-size: 14px;
  color: #27ae60;
  text-align: center;
  background: rgba(111, 207, 151, 0.2);
  border-radius: 8px;
  line-height: 150%;

  ${(props) =>
    props.isError &&
    `
        color: #eb5757;
        background: rgba(235,87,87,0.2);
    `}
`;
