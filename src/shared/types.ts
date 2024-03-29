export enum SelectedPage {
  Home =  "home",
  Benifits= "benifits",
  OurClasees= "ourclasses",
  ContactUs= "contactus",
}

export interface BenefitType {
  icon: JSX.Element,
  title: string,
  description: string,
}

export interface ClassType {
  name: string,
  description?: string,
  image: string,
}

export enum SectionImages {
  logo = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2FLogo.png?alt=media&token=80ced25c-91e8-4f4f-8bcc-1d16bba35649",
  image1 = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2Fimage1.png?alt=media&token=cba89fa7-45be-4a36-8df1-2adc2f0aae35",
  image2 = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2Fimage2.png?alt=media&token=5138a59d-7ed7-4872-86e4-dfa69a99164a",
  image3 = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2Fimage3.png?alt=media&token=10e4836e-3852-4cd0-8e06-463fe2acbaef",
  image4 = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2Fimage4.png?alt=media&token=5aab3411-9d91-46f7-b9ee-a7f480995a29",
  image5 = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2Fimage5.png?alt=media&token=65ee2ada-2c1a-46ea-95b0-8890882ff3b1",
  image6 = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2Fimage6.png?alt=media&token=4e52c676-89bd-418b-ac7f-ce014ad2dfc5",
  ContactUsPageGraphic = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2FContactUsPageGraphic.png?alt=media&token=5856a7c1-6a73-4251-92ea-8ff59e7ce1ed",
  HomePageText ="https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2FHomePageText.png?alt=media&token=9d601140-eb58-46e3-ac0c-e9bef01fd67c",
  HomePageGraphic = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2FHomePageGraphic.png?alt=media&token=56d5bf42-f9e5-4f23-9bbd-6b417fce2c3b",
  SponsorRedBull = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2FSponsorRedBull.png?alt=media&token=f58b3515-51ac-4ecf-93f6-5ab19f73c3c2",
  SponsorForbes = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2FSponsorForbes.png?alt=media&token=0bc956a5-87a3-4485-b707-ff22a7acab31",
  SponsorFortune = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2FSponsorFortune.png?alt=media&token=25b336dd-eb1a-4fff-8bf0-3383d87c8afe",
  BenefitsPageGraphic = "https://firebasestorage.googleapis.com/v0/b/appdata-2bd6c.appspot.com/o/fitness%2FBenefitsPageGraphic.png?alt=media&token=ba18aa30-d164-4187-97cb-b52c5b8813c4",

}