const collection = [
  {
    collectionTypeTitle: 'Art',
    collectionType: 'Art',
    collectionBackground: '/gallery/Mythologies/Musae_in_Deliquium/image_iii.jpg',
    collectionTitle: 'Mythologies',
    collectionName: 'Mythologies',
    aboutCollection: `<p>borrows strategies from Surrealism’s encounters with automatic writing in a deliberate effort to create visual art that exceeds conscious determination.</p>`,
    images: [
      { title: 'Sanguine Miles', name: 'Sanguine_Miles', path: '/gallery/Mythologies/Sanguine_Miles', ratio: '1:1', shop: true, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Valteri Mortem Benjamin', name: 'Valteri_Mortem_Benjamin', path: '/gallery/Mythologies/Valteri_Mortem_Benjamin', ratio: '1:1', shop: true, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Turris Babel', name: 'Turris_Babel', path: '/gallery/Mythologies/Turris_Babel', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Regina Sumer', name: 'Regina_Sumer', path: '/gallery/Mythologies/Regina_Sumer', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Natalis Sancti Igne', name: 'Natalis_Sancti_Igne', path: '/gallery/Mythologies/Natalis_Sancti_Igne', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Caput Corpori Mutationes Autem Perseus', name: 'Caput_Corpori_Mutationes_Autem_Perseus', path: '/gallery/Mythologies/Caput_Corpori_Mutationes_Autem_Perseus', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Parere BeBop II', name: 'Parere_BeBop_II', path: '/gallery/Mythologies/Parere_BeBop_II', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Poster Tabula I', name: 'Poster_Tabula_I', path: '/gallery/Mythologies/Poster_Tabula_I', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Atlas Tenebre', name: 'Atlas_Tenebre', path: '/gallery/Mythologies/Atlas_Tenebre', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Anisoptera', name: 'Anisoptera', path: '/gallery/Mythologies/Anisoptera', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Innare Carinas Lumen Reflexa', name: 'Innare_Carinas_Lumen_Reflexa', path: '/gallery/Mythologies/Innare_Carinas_Lumen_Reflexa', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Obumbratio', name: 'Obumbratio', path: '/gallery/Mythologies/Obumbratio', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Bis Flores Exploded', name: 'Bis_Flores_Exploded', path: '/gallery/Mythologies/Bis_Flores_Exploded', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Ambustam Ligni Glacialis Aquae', name: 'Ambustam_Ligni_Glacialis_Aquae', path: '/gallery/Mythologies/Ambustam_Ligni_Glacialis_Aquae', ratio: '1:1', shop: true, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Mulier Cyclopis', name: 'Mulier_Cyclopis', path: '/gallery/Mythologies/Mulier_Cyclopis', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Parere BeBop I', name: 'Parere_BeBop_I', path: '/gallery/Mythologies/Parere_BeBop_I', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Pisces Quoque Aurum', name: 'Pisces_Quoque_Aurum', path: '/gallery/Mythologies/Pisces_Quoque_Aurum', ratio: '1:1', shop: true, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'O Inaestimabilis Pax Americana', name: 'O_Inaestimabilis_Pax_Americana', path: '/gallery/Mythologies/O_Inaestimabilis_Pax_Americana', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Venit Stercore', name: 'Venit_Stercore', path: '/gallery/Mythologies/Venit_Stercore', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Musae in Deliquium', name: 'Musae_in_Deliquium', path: '/gallery/Mythologies/Musae_in_Deliquium', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Capulus Tabernum', name: 'Capulus_Tabernum', path: '/gallery/Mythologies/Capulus_Tabernum', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Claviaturae', name: 'Claviaturae', path: '/gallery/Mythologies/Claviaturae', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Ones Tenebris Flavaque', name: 'Ones_Tenebris_Flavaque', path: '/gallery/Mythologies/Ones_Tenebris_Flavaque', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Convallaria Majalis', name: 'Convallaria_Majalis', path: '/gallery/Mythologies/Convallaria_Majalis', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
      { title: 'Tesselato Stravit Flos Tegumen Spinis', name: 'Tesselato_Stravit_Flos_Tegumen_Spinis', path: '/gallery/Mythologies/Tesselato_Stravit_Flos_Tegumen_Spinis', ratio: '1:1', shop: false, year: '2018', tags: 'Digital Photography, Pixellation' },
    ]
  },
  {
    collectionTypeTitle: 'Art',
    collectionType: 'Art',
    collectionBackground: '/gallery/Nature_Morte/2_The_Receptive_0/Nature_Morte_background.jpg',
    collectionTitle: 'Nature Morté',
    collectionName: 'Nature_Morte',
    aboutCollection: `inherits from the miniaturized mise-en-scene of painting's still life and scientific
    illustrations of botanical, entomological, and zoological specimens to produce a catalog of ontologies
    aptly named after the 64 Hexagrams of the I Ching.`,
    images: [
      { title: '1 - The Creative - 63', name: '1_The_Creative_63', path: '/gallery/Nature_Morte/1_The_Creative_63', ratio: '1:1', shop: false, year: '2011', tags: 'Digital Photography, Still Life' },
      { title: '24 - Return - 1', name: '24_Return_1', path: '/gallery/Nature_Morte/24_Return_1', ratio: '1:1', shop: true, year: '2011', tags: 'Digital Photography, Still Life' },
      { title: '64 - Before Completion - 42', name: '64_Before_Completion_42', path: '/gallery/Nature_Morte/64_Before_Completion_42', ratio: '1:1', shop: false, year: '2011', tags: 'Digital Photography, Still Life' },
      { title: '2 - The Receptive - 0', name: '2_The_Receptive_0', path: '/gallery/Nature_Morte/2_The_Receptive_0', ratio: '1:1', shop: false, year: '2013', tags: 'Digital Photography, Still Life' },
      { title: '5 - Nourishing While Waiting - 23', name: '5_Nourishing_While_Waiting_23', path: '/gallery/Nature_Morte/5_Nourishing_While_Waiting_23', ratio: '1:1', shop: false, year: '2012', tags: 'Digital Photography, Still Life' },
      { title: '18 - Decay - 38', name: '18_Decay_38', path: '/gallery/Nature_Morte/18_Decay_38', ratio: '1:1', shop: false, year: '2012', tags: 'Digital Photography, Still Life' },
      { title: '40 - Limitation - 10', name: '40_Limitation_10', path: '/gallery/Nature_Morte/40_Limitation_10', ratio: '1:1', shop: false, year: '2012', tags: 'Digital Photography, Still Life' },
      { title: '9 - Small Restraint - 55', name: '9_Small_Restraint_55', path: '/gallery/Nature_Morte/9_Small_Restraint_55', ratio: '1:1', shop: false, year: '2011', tags: 'Digital Photography, Still Life' },
      { title: '37 - Family - 53', name: '37_Family_53', path: '/gallery/Nature_Morte/37_Family_53', ratio: '1:1', shop: true, year: '2018', tags: 'Digital Photography, Still Life' },
      { title: '23 - Split Apart - 32', name: '23_Split_Apart_32', path: '/gallery/Nature_Morte/23_Split_Apart_32', ratio: '1:1', shop: false, year: '2011', tags: 'Digital Photography, Still Life' },
      { title: '46 - Pushing Upward - 6', name: '46_Pushing_Upward_6', path: '/gallery/Nature_Morte/46_Pushing_Upward_6', ratio: '1:1', shop: false, year: '2013', tags: 'Digital Photography, Still Life' },
      { title: '59 - Dispersion - 50', name: '59_Dispersion_50', path: '/gallery/Nature_Morte/59_Dispersion_50', ratio: '1:1', shop: false, year: '2011', tags: 'Digital Photography, Still Life' },
    ]
  },
  {
    collectionTypeTitle: 'Art',
    collectionType: 'Art',
    collectionBackground: '/gallery/Starlight_Meadows/We_Do_Not_Torture_People/image_ii.jpg',
    collectionTitle: 'Starlight Meadows',
    collectionName: 'Starlight_Meadows',
    aboutCollection: `<p>tells an allegorical story about memory and identity. In a kingdom where an amnesiac king abandons his throne, only a motley troop of primates stands between
    the populace and a reign of terror brought by the arrival of a trio of pigs intent on . </p>`,
    images: [
      { title: 'This Is Not an Abattoir', name: 'This_Is_Not_An_Abattoir', path: '/gallery/Starlight_Meadows/This_Is_Not_An_Abattoir', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'Wait a Minute We’re the Good Guys?', name: 'Wait_A_Minute_Were_the_Good_Guys', path: '/gallery/Starlight_Meadows/Wait_A_Minute_Were_the_Good_Guys', ratio: '3:2', shop: true, year: '2006', tags: 'Digital Photography, Directorial' },
      { title: 'We Do Not Torture People', name: 'We_Do_Not_Torture_People', path: '/gallery/Starlight_Meadows/We_Do_Not_Torture_People', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'Media Bias: Axis of Evil', name: 'Media_Bias_Axis_of_Evil', path: '/gallery/Starlight_Meadows/Media_Bias_Axis_of_Evil', ratio: '3:2', shop: false, year: '2005',  tags:'Digital Photography, Directorial' },
      { title: 'The King Is With Us Now', name: 'The_King_Is_with_Us_Now', path: '/gallery/Starlight_Meadows/The_King_Is_with_Us_Now', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'Mr. Halloween', name: 'Mr_Halloween', path: '/gallery/Starlight_Meadows/Mr_Halloween', ratio: '3:2', shop: false, year: '2005',  tags:'Digital Photography, Directorial' },
      { title: 'On the Seventh of November', name: 'On_the_Seventh_of_November', path: '/gallery/Starlight_Meadows/On_the_Seventh_of_November', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'Captured by the Pigs', name: 'Captured_by_the_Pigs', path: '/gallery/Starlight_Meadows/Captured_by_the_Pigs', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'Guerilla Warfare', name: 'Guerilla_Warfare', path: '/gallery/Starlight_Meadows/Guerilla_Warfare', ratio: '3:2', shop: false, year: '2006', tags: 'Digital Photography, Directorial' },
      { title: 'A Life That Lasts a Day', name: 'A_Life_That_Lasts_a_Day', path: '/gallery/Starlight_Meadows/A_Life_That_Lasts_a_Day', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'The Watchman', name: 'The_Watchman', path: '/gallery/Starlight_Meadows/The_Watchman', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'Remember—Remember—the Seventh of November', name: 'Remember_Remember_The_Seventh_of_November', path: '/gallery/Starlight_Meadows/Remember_Remember_The_Seventh_of_November', ratio: '3:2', shop: false, year: '2006', tags: 'Digital Photography, Directorial' },
      { title: 'Yule', name: 'Yule', path: '/gallery/Starlight_Meadows/Yule', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'He Is With Us, but Remembers Nothing', name: 'He_Is_with_Us_but_Remembers_Nothing', path: '/gallery/Starlight_Meadows/He_Is_with_Us_but_Remembers_Nothing', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'He Was Looking for a Way Out', name: 'He_Was_Looking_for_a_Way_Out', path: '/gallery/Starlight_Meadows/He_Was_Looking_for_a_Way_Out', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'Troglodytes, They Were Called', name: 'Troglodytes_They_were_Called', path: '/gallery/Starlight_Meadows/Troglodytes_They_were_Called', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'That Old Chimp Called Himself Sarge', name: 'That_Old_Chimp_Called_Himself_Sarge', path: '/gallery/Starlight_Meadows/That_Old_Chimp_Called_Himself_Sarge', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'You Didn’t—But, I Did.', name: 'You_Didnt_But_I_Did', path: '/gallery/Starlight_Meadows/You_Didnt_But_I_Did', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'Behind the Barn', name: 'Behind_the_Barn', path: '/gallery/Starlight_Meadows/Behind_the_Barn', ratio: '3:2', shop: false, year: '2005', tags: 'Digital Photography, Directorial' },
      { title: 'That’s No Way to Play', name: 'Thats_No_Way_to_Play', path: '/gallery/Starlight_Meadows/Thats_No_Way_to_Play', ratio: '3:2', shop: false, year: '2006', tags: 'Digital Photography, Directorial' },
    ]
  },
  {
    collectionTypeTitle: 'Design',
    collectionType: 'Design',
    collectionBackground: '/gallery/PXL8N/Languid_Angel/image_i.jpg',
    collectionLogo: '/gallery/PXL8N/PXL8N_Tag_Logo_sml.png',
    collectionTitle: 'PXL∞N',
    collectionName: 'PXL8N',
    aboutCollection: `<p>Like a snake eating its tail, PXL∞N is a line of designer goods & apparel that appropriates its graphic patterns from extreme enlargements of the Mythologies series. </p>`,
    images: [
      { title: 'VMB-IV', name: 'VMB_IV', path: '/gallery/PXL8N/VMB_IV', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design, Pixellation' },
      { title: 'VMB-I', name: 'VMB_I', path: '/gallery/PXL8N/VMB_I', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design, Pixellation' },
      { title: 'TSFTS-I', name: 'TSFTS_I', path: '/gallery/PXL8N/TSFTS_I', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design, Pixellation' },
      { title: 'ALGA-I', name: 'ALGA_I', path: '/gallery/PXL8N/ALGA_I', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design, Pixellation' },
    ]
  },
  {
    projectTypeTitle: 'Designs',
    projectType: 'Design',
    collectionTitle: 'PXL8N',
    collectionName: 'PXL8N',
    images: [
      { title: 'Double Daredevil', name: 'Double_Daredevil', path: '/gallery/PXL8N/Double_Daredevil', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design' },
      { title: 'Wintergreen Is Coming', name: 'Wintergreen_Is_Coming', path: '/gallery/PXL8N/Wintergreen_Is_Coming', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design' },
      { title: 'Languid Angel', name: 'Languid_Angel', path: '/gallery/PXL8N/Languid_Angel', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design' },
      { title: 'Petal Pusher', name: 'Petal_Pusher', path: '/gallery/PXL8N/Petal_Pusher', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design' },
    ]
  },
  {
    projectTypeTitle: 'Designs',
    projectType: 'Design',
    collectionTitle: 'Coffee',
    collectionName: 'Coffee',
    images: [
      { title: 'Product Page', name: 'Product_Page_1', path: '/gallery/PXL8N/Product_Page_1', ratio: '3:2', shop: false, year: '2018', tags: 'Packaging Design' },
    ]
  },
  {
    projectTypeTitle: 'Designs',
    projectType: 'Design',
    collectionTitle: 'I Ching',
    collectionName: 'IChing',
    images: [
      { title: 'Product Page', name: 'Product_Page_1', path: '/gallery/PXL8N/Product_Page_1', ratio: '3:2', shop: false, year: '2018', tags: 'Packaging Design' },
    ]
  },
  {
    projectTypeTitle: 'Webd',
    projectType: 'Webd',
    collectionTitle: 'PXL∞N',
    collectionName: 'PXL8N',
    images: [
      { title: 'PXL∞N Home Page', name: 'Home_Page_1', path: '/gallery/PXL8N/Home_Page_1', ratio: '13:23', shop: false, year: '2018', tags: 'Shopify, HTML/Liquid, CSS, Photoshop' },
      { title: 'PXL∞N Home Page', name: 'Home_Page_2', path: '/gallery/PXL8N/Home_Page_2', ratio: '13:23', shop: false, year: '2018', tags: 'Shopify, HTML/Liquid, CSS, Photoshop' },
      { title: 'PXL∞N Home Page', name: 'Home_Page_3', path: '/gallery/PXL8N/Home_Page_3', ratio: '13:23', shop: false, year: '2018', tags: 'Shopify, HTML/Liquid, CSS, Photoshop' },
      { title: 'PXL∞N Home Page', name: 'Home_Page_4', path: '/gallery/PXL8N/Home_Page_4', ratio: '13:23', shop: false, year: '2018', tags: 'Shopify, HTML/Liquid, CSS, Photoshop' },
      { title: 'PXL∞N Catalog Page', name: 'Catalog_View_1', path: '/gallery/PXL8N/Catalog_View_1', ratio: '13:24', shop: false, year: '2018', tags: 'Shopify, HTML/Liquid, CSS, Photoshop' },
      { title: 'PXL∞N Product Page', name: 'Product_Page_1', path: '/gallery/PXL8N/Product_Page_1', ratio: '13:32', shop: false, year: '2018', tags: 'Shopify, HTML/Liquid, CSS, Photoshop' },
      { title: 'PXL∞N Product Page', name: 'Product_Page_3', path: '/gallery/PXL8N/Product_Page_3', ratio: '13:32', shop: false, year: '2018', tags: 'Shopify, HTML/Liquid, CSS, Photoshop' },
      { title: 'PXL∞N Product Page', name: 'Product_Page_4', path: '/gallery/PXL8N/Product_Page_4', ratio: '13:32', shop: false, year: '2018', tags: 'Shopify, HTML/Liquid, CSS, Photoshop' },
      { title: 'PXL∞N Product Page', name: 'Product_Page_5', path: '/gallery/PXL8N/Product_Page_5', ratio: '13:32', shop: false, year: '2018', tags: 'Shopify, HTML/Liquid, CSS, Photoshop' },
    ]
  },
  {
    projectTypeTitle: 'Web',
    projectType: 'Web',
    projectTitle: 'National Park Guides',
    projectName: 'National_Park_Guides',
    projectLogo: '/gallery/National_Park_Guides/us-nps.png',
    projectThumb: '/gallery/National_Park_Guides/natparguides__thumbnail_2.jpg',
    projectThumbLogo: '/gallery/National_Park_Guides/us-nps.png',
    projectBackground: '/gallery/National_Park_Guides/natparguides__background__spring.jpg',
    projectCategory: 'Full Stack & UX/UI',
    projectTags: ['NextJS/React/Node/MongoDB', 'Progressive Web App', 'API Integration'],
    projectURL: 'https://natparguides.com',
    projectDescription: '<a href="https://github.com/jsnkng/National-Parks">View on GitHub</a><br /><p>An homage to the iconic NPS print guides, National Park Guides combines all 450 plus parks into a simple, easily navigated digital guide. Offering up-to-date park alerts, event information, maps, and park-related news, along with admission fees, contact information, campground, and visitor center locations and info all backed by the National Park Service API.</p>',
    images: [
      { title: 'National Park Detail Page (Desktop/Light)', name: 'Park_Detail_Guide_Large_Light', path: '/gallery/National_Park_Guides/Park_Detail_Guide_Large_Light', ratio: '9:83', shop: false, year: '2020', tags: 'React' },
      { title: 'National Park Detail Page (Desktop/Dark)', name: 'Park_Detail_Guide_Large_Dark', path: '/gallery/National_Park_Guides/Park_Detail_Guide_Large_Dark', ratio: '9:41', shop: false, year: '2020', tags: 'React' },
    ]
  },
  {
    projectTypeTitle: 'Web',
    projectType: 'Web',
    projectTitle: 'Halter’s Cycles',
    projectName: 'Halters_Cycles',
    projectLogo: '/gallery/Halters_Cycles/HC_Script_Yellow.png',
    projectThumb: '/gallery/Halters_Cycles/halterscycles_thumbnail.jpg',
    projectThumbLogo: '/gallery/Halters_Cycles/halterscycles-logo-mtb-tire.png',
    projectBackground: '/gallery/Halters_Cycles/halters-cycles-checkout.jpg',
    projectCategory: 'UX/UI, Wordpress, WooCommerce',
    projectTags: ['Responsive Design', 'Print-on-Demand Integration'],
    projectURL: 'https://www.halterscycles.com',
    projectDescription: '<p>Designed to drive foot traffic to a brick-and-mortar retail bike shop, the Halter’s Cycles website is mobile-friendly and keeps important contact information at the top of the screen at all times. The site makes use of content from social media posts, reviews from around the web, and shop photos and graphical design elements to give visitors the flavor of the shop and draw customers in.</p>',
    images: [
      { title: 'Halter’s Cycles', name: 'Halters_Cycles', path: '/gallery/Web/Halters_Cycles', ratio: '3:2', shop: false, year: '2019', tags: 'WordPress, WooCommerce,  Printful, Photoshop' },
    ]
  },
  {
    projectTypeTitle: 'Web',
    projectType: 'Web',
    projectTitle: 'Hugh Johnson Advisors',
    projectName: 'Hugh_Johnson_Advisors',
    projectLogo: '/gallery/HJAdvisors/HJAdvisors_logo.png',
    projectThumb: '/gallery/HJAdvisors/hjadvisors_thumbnail.jpg',
    projectThumbLogo: '/gallery/HJAdvisors/HJAdvisors_logo.png',
    projectBackground: '/gallery/HJAdvisors/HJAdvisorsBackground.jpg',
    projectCategory: 'UX/UI, Wordpress',
    projectTags: ['Brochure and Media Site'],
    projectURL: 'https://www.hjadvisors.com',
    projectDescription: '<p>Hugh Johnson Advisors is a registered investment advisor who’s founder regularly appears in the media through his Hugh’s Market Minute video segment. The website provides a high-level overview of the products and services Hugh Johnson Advisors offers and makes it easy for prospective clients to learn more about the company.</p>',
    images: [
      { title: 'Hugh Johnson Advisors', name: 'Hugh_Johnson_Advisors', path: '/gallery/Web/Hugh_Johnson_Advisors', ratio: '3:2', shop: false, year: '2018', tags: 'WordPress, HTML, CSS, Photoshop' },
    ]
  },
  {
    projectTypeTitle: 'Web',
    projectType: 'Web',
    projectTitle: 'Atkins CRE',
    projectName: 'Atkins_CRE',
    projectLogo: '/gallery/AtkinsCRE/logo-atkins-commercial-realestate.png',
    projectThumb: '/gallery/AtkinsCRE/atkinscre_thumbnail.jpg',
    projectThumbLogo: '/gallery/AtkinsCRE/logo-atkins-commercial-realestate.png',
    projectBackground: '/gallery/AtkinsCRE/AtkinsCRE_Background.jpg',
    projectCategory: 'UX/UI, Wordpress',
    projectTags: ['Responsive Design', 'Dynamic Property Listings'],
    projectURL: 'https://www.atkinscre.com',
    projectDescription: '<p>All businesses need to generate leads and develop brand awareness, Atkins Commercial Real Estate uses their mobile-friendly, Wordpress site to do both and a whole lot more. Putting the customer’s needs first, Atkins CRE’s design puts map and phone button at the top of every screen for easy access and a CTA contact form at the bottom so users are provided lots of opportunities to get in touch. What’s more, properties they have listed are available on the website and kept up-to-date through a custom WordPress plugin.</p>',
  },
  {
    projectTypeTitle: 'Web',
    projectType: 'Web',
    projectTitle: 'AdCycle',
    projectName: 'AdCycle',
    projectLogo: '/gallery/AdCycle/logo-adcycle-white-rounded.png',
    projectThumb: '/gallery/AdCycle/adcycle_thumbnail.jpg',
    projectThumbLogo: '/gallery/AdCycle/logo-adcycle-white-rounded.png',
    projectBackground: '/gallery/AdCycle/AdCycleBackground.jpg',
    projectCategory: 'UX/UI, Wordpress',
    projectTags: ['Responsive Design'],
    projectURL: 'https://www.adcycle.co',
    projectDescription: '<p></p>',
  },
  {
    projectTypeTitle: 'Webs',
    projectType: 'Webs',
    projectTitle: 'SoylentX',
    projectName: 'SoylentX',
    projectLogo: '/gallery/AdCycle/logo-adcycle-white-rounded.png',
    projectThumb: '/gallery/AdCycle/adcycle_thumbnail.jpg',
    projectThumbLogo: '/gallery/AdCycle/logo-adcycle-white-rounded.png',
    projectBackground: '/gallery/AdCycle/AdCycleBackground.jpg',
    projectCategory: 'UX/UI, Wordpress',
    projectTags: ['Responsive Design'],
    projectURL: 'https://www.soylentx.com',
    projectDescription: '<p></p>',
  },
  {
    projectTypeTitle: 'Code',
    projectType: 'Code',
    collectionTitle: 'PWA API/Full Stack',
    collectionName: 'PWA_API_Full_Stack',
    images: [
      { title: 'PWA API/Full Stack', name: 'PWA_API_Full_Stack', path: '/gallery/Code/PWA_API_Full_Stack', ratio: '3:2', shop: false, year: '2020', tags: 'JavaScript/NodeJS, MongoDB, NextJS, React, PWA/SPA, Service Workers, HTML/JSX, CSS/SCSS, Zeit Serverless Hosting' },
    ]
  },
  {
    projectTypeTitle: 'Code',
    projectType: 'Code',
    collectionTitle: 'Pharma API/Backend',
    collectionName: 'Pharma_API_Backend',
    images: [
      { title: 'Pharma API/Backend', name: 'Pharma_API_Backend', path: '/gallery/Code/Pharma_API_Backend', ratio: '3:2', shop: false, year: '2015', tags: 'PHP, MySQL, Laravel, PDFLib, Mailgun, EFax, Composer, Apache, Docker, Alpine' },
    ]
  },
  {
    projectTypeTitle: 'Code',
    projectType: 'Code',
    collectionTitle: 'Pharma API/Frontend',
    collectionName: 'Pharma_API_Frontend',
    images: [
      { title: 'Pharma API/Frontend', name: 'Pharma_API_Frontend', path: '/gallery/Code/Pharma_API_Frontend', ratio: '3:2', shop: false, year: '2015', tags: 'AngularJS, HTML/Pug, CSS/SCSS, NPM/Gulp, Apache, Docker, Alpine' },
    ]
  },
  {
    projectTypeTitle: 'Code',
    projectType: 'Code',
    collectionTitle: 'Veeva Hybrid iPad App',
    collectionName: 'Veeva_Hybrid_iPad_App',
    images: [
      { title: 'Veeva Hybrid iPad App', name: 'Veeva_Hybrid_iPad_App', path: '/gallery/Code/Veeva_Hybrid_iPad_App', ratio: '3:2', shop: false, year: '2017', tags: 'AngularJS, HTML/Pug, CSS/SCSS, NPM/Grunt, Apache, Docker, Alpine' },
    ]
  },
  {
    projectTypeTitle: 'Code',
    projectType: 'Code',
    collectionTitle: 'Ionic/Cordove Hybrid Mobile App',
    collectionName: 'Ionic_Cordove_Hybrid_Mobile_App',
    images: [
      { title: 'Ionic/Cordove Hybrid Mobile App', name: 'Ionic_Cordove_Hybrid_Mobile_App', path: '/gallery/Code/Ionic_Cordove_Hybrid_Mobile_App', ratio: '3:2', shop: false, year: '2016', tags: 'AngularJS, Ionic, HTML/Pug, CSS/SCSS, NPM/Grunt' },
    ]
  }
  
]

export default collection
