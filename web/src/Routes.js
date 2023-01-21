// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={[MainLayout, ScaffoldLayout]} title="Cars" titleTo="cars" buttonLabel="New Car" buttonTo="newCar">
        <Route path="/cars/new" page={CarNewCarPage} name="newCar" />
        <Route path="/cars/{id:Int}/edit" page={CarEditCarPage} name="editCar" />
        <Route path="/cars/{id:Int}" page={CarCarPage} name="car" />
        <Route path="/cars" page={CarCarsPage} name="cars" />
      </Set>
      <Set wrap={[MainLayout, ScaffoldLayout]} title="Car Brands" titleTo="carBrands" buttonLabel="New Car Brand" buttonTo="newCarBrand">
        <Route path="/car-brands/new" page={CarBrandNewCarBrandPage} name="newCarBrand" />
        <Route path="/car-brands/{id:Int}" page={CarBrandCarBrandPage} name="carBrand" />
        <Route path="/car-brands/{id:Int}/edit" page={CarBrandEditCarBrandPage} name="editCarBrand" />
        <Route path="/carbrands/{page:Int}/{limit:Int}" page={CarBrandCarBrandsPage} name="carBrandsPaged" />
        <Route path="/carbrands" page={CarBrandCarBrandsPage} name="carBrands" />
      </Set>
      <Set wrap={[MainLayout, ScaffoldLayout]} title="Car Models" titleTo="carModels" buttonLabel="New Car Model" buttonTo="newCarModel">
        <Route path="/car-models/new" page={CarModelNewCarModelPage} name="newCarModel" />
        <Route path="/car-models/{id:Int}/edit" page={CarModelEditCarModelPage} name="editCarModel" />
        <Route path="/car-models/{id:Int}" page={CarModelCarModelPage} name="carModel" />
        <Route path="/car-models/{page:Int}/{limit:Int}" page={CarModelCarModelsPage} name="carModelsPaged" />
        <Route path="/car-models" page={CarModelCarModelsPage} name="carModels" />
      </Set>
      <Set wrap={[MainLayout, ScaffoldLayout]} title="Companies" titleTo="companies" buttonLabel="New Company" buttonTo="newCompany">
        <Route path="/companies/new" page={CompanyNewCompanyPage} name="newCompany" />
        <Route path="/companies/{id:Int}/edit" page={CompanyEditCompanyPage} name="editCompany" />
        <Route path="/companies/{id:Int}" page={CompanyCompanyPage} name="company" />
        <Route path="/companies/{page:Int}/{limit:Int}" page={CompanyCompaniesPage} name="companiesPaged" />
        <Route path="/companies" page={CompanyCompaniesPage} name="companies" />
      </Set>
      <Set wrap={[MainLayout, ScaffoldLayout]} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser" private unauthenticated="login">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={[MainLayout]}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
