/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDAvatar from 'components/MDAvatar'
import MDBadge from 'components/MDBadge'

// Images
import team2 from 'assets/images/team-2.jpg'
import team3 from 'assets/images/team-3.jpg'
import team4 from 'assets/images/team-4.jpg'

export default function data() {
  const Aluno = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  )

  const Funcao = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  )

  return {
    columns: [
      { Header: 'aluno', accessor: 'aluno', width: '45%', align: 'left' },
      { Header: 'função', accessor: 'funcao', align: 'left' },
      { Header: 'status', accessor: 'status', align: 'center' },
      { Header: 'data de inicio', accessor: 'data_inicio', align: 'center' },
      { Header: 'ação', accessor: 'acao', align: 'center' }
    ],

    rows: [
      {
        aluno: (
          <Aluno
            image={team2}
            name="Igor Arthur"
            email="igor.ramos@ccc.ufcg.edu.br"
          />
        ),
        funcao: <Funcao title="Engenheiro Full-Stack" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="ativo"
              color="red"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        data_inicio: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            12/11/2021
          </MDTypography>
        ),
        acao: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        )
      },
      {
        aluno: (
          <Aluno
            image={team3}
            name="Daniel Ferreira"
            email="daniel.ferreira@ccc.ufcg.edu.br"
          />
        ),
        funcao: <Funcao title="Engenheiro Front-End" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="ativo"
              color="green"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        data_inicio: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            22/04/2022
          </MDTypography>
        ),
        acao: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        )
      }
    ]
  }
}
