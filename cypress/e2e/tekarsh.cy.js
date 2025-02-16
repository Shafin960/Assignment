import Login from '../e2e/pages/login';
import Signup from '../e2e/pages/signup';
import Product from '../e2e/pages/product';
import Jeans from '../e2e/pages/jeans';
import Checkout from '../e2e/pages/checkout';
import ContactUs from '../e2e/pages/contactus';

describe('Tekarsh Checkout Process Complete Assignment', () => {
  const loginPage = new Login();
  const signupPage = new Signup();
  const productPage = new Product();
  const jeansPage = new Jeans();
  const checkoutPage = new Checkout();
  const contactUsPage = new ContactUs();
  it('Test Tasks', () => {

    //CheckoutSteps Test
    loginPage.visit();

    const email = `mushfique${Date.now()}@gmail.com`;
    const name = "Md Mushfique Hossain";
    loginPage.fillSignUpDetails(name, email);
    signupPage.fillSignupForm();
    productPage.productsPage();
    productPage.navigateToMenJeans();

    jeansPage.viewProduct();
    jeansPage.updateQuantity(2);
    jeansPage.addToCart();

    jeansPage.viewCart();
    jeansPage.proceedToCheckout();
    jeansPage.proceedToCheckout();

    checkoutPage.fillPaymentForm();

    checkoutPage.submitPayment();
    checkoutPage.verifySuccessMessage();


    //Contact Us Section Test
    contactUsPage.visit();

    contactUsPage.fillContactForm(
      'Mushfique Hossain',
      'mushfique3214@gmail.com',
      'Hiring Concerns',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      'test.jpg'
    );
    contactUsPage.verifySubmission();
  })
})