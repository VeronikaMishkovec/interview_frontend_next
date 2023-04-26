import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

import Layout from "../components/Layout"

const testUser = [
  {
    id: 1,
    email: 'test_user@test.com',
    username: 'test_username',
    first_name: 'test_first_name',
    second_name: 'test_second_name',
    specialisation: 'frontend',
    degree: 'trainee'
  }
]

function createData(
  email: string,
  username: string,
  first_name: string,
  second_name: string,
  specialisation: string,
  degree: string
) {
  return { email, username, first_name, second_name, specialisation, degree };
}

const Admin = () => {

  const rows = testUser.map(item => createData(item.email, item.username, item.first_name, item.second_name, item.specialisation, item.degree))

  return (
    <Layout>
       <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Username</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>First name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Second name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Specialisation</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Degree</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.email}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.second_name}</TableCell>
                  <TableCell>{row.specialisation}</TableCell>
                  <TableCell>{row.degree}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>
    </Layout>
  )
}

export default Admin
