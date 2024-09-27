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
import team5 from 'assets/images/team-5.jpg'
import team6 from 'assets/images/team-6.jpg'
import team7 from 'assets/images/team-7.jpg'
import team8 from 'assets/images/team-8.jpg'

export default function data() {
  const Disciplina = ({ image, name, email }) => (
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

  const Periodo = ({ title, description }) => (
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
      {
        Header: 'disciplina',
        accessor: 'disciplina',
        width: '45%',
        align: 'left'
      },
      { Header: 'período', accessor: 'periodo', align: 'left' },
      { Header: 'status', accessor: 'status', align: 'center' },
      { Header: 'orfeta', accessor: 'orfeta', align: 'center' },
      { Header: 'ação', accessor: 'acao', align: 'center' }
    ],

    rows: [
      {
        disciplina: (
          <Disciplina
            image={team5}
            name="Trabalho de Conclusão de Curso"
            email="hyggo@computacao.ufcg.edu.br"
          />
        ),
        periodo: (
          <Periodo
            title="9º Período"
            description="Trabalho de Conclusão de Curso"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="ativo"
              color="blue"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        orfeta: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            31/80
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
            Fazer matrícula
          </MDTypography>
        )
      },
      {
        disciplina: (
          <Disciplina
            image={team6}
            name="Projeto em Computação II"
            email="garcia@computacao.ufcg.edu.br"
          />
        ),
        periodo: <Periodo title="9º Período" description="Obrigatória" />,
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
        orfeta: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            57/80
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
            Fazer matrícula
          </MDTypography>
        )
      },
      {
        disciplina: (
          <Disciplina
            image={team7}
            name="Programação Concorrente"
            email="thiago.emmanuel@computacao.ufcg.edu.br"
          />
        ),
        periodo: <Periodo title="6º Período" description="Obrigatória" />,
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
        orfeta: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            23/80
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
            Matricular
          </MDTypography>
        )
      },
      {
        disciplina: (
          <Disciplina
            image={team8}
            name="Análise e Técnica de Algoritmos"
            email="melina@computacao.ufcg.edu.br"
          />
        ),
        periodo: (
          <Periodo title="7º Período" description="Obrigatória" />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="ativo"
              color="yellow"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        orfeta: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            42/80
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
            Matricular
          </MDTypography>
        )
      },
      {
        disciplina: (
          <Disciplina
            image={team1}
            name="Programação para Web"
            email="demetrio@computacao.ufcg.edu.br"
          />
        ),
        periodo: (
          <Periodo title="6º Período" description="optativa Específica" />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="ativo"
              color="pink"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        orfeta: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            35/80
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
            Matricular
          </MDTypography>
        )
      }
    ]
  }
}
