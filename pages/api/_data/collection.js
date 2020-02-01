const collection = [
  {
    disciplineTitle: 'Art',
    disciplineName: 'Art',
    collectionTitle: 'Mythologies',
    collectionName: 'Mythologies',
    aboutCollection: `<h3>Rationale</h3>
          <p>When it comes to the work of art, if we concern ourselves with its meaning, we may 
          situate it with others sharing its aesthetic form and proceed to contextualize it, to 
          deconstruct it. We may read closely, pay careful attention to details, strokes, 
          notes, lines, forms, words, and colors, but we may yet wonder at the workings of the 
          mind that created it, for we want to believe somewhere there exists an author that 
          can guarantee meaning.</p>
          <p>To make the world a stable thing is no small feat. What moved people in the past, 
          the grand narratives, have fallen. Cherished stories carry their own shadows. 
          Authoritarianism, even the word itself betrays a drive to fix the meaning of language, 
          is largely an aesthetic pursuit to author a grand narrative that can motivate a political 
          mob, a narrative that invents a tradition to claim for itself.</p>
          <p>Mythologies borrows strategies from Surrealism’s encounters with automatic writing 
          in a deliberate effort to create visual art that exceeds conscious determination, to 
          escape authority, by guiding a process that dismantles the internal structure of the 
          digital photograph and transforms it into its constituent fields of interrelated 
          pixels.</p>
          <h3>Method</h3>
          <p>The schizo-critical method is a surrealist technique employed in the production of 
          Digital images and other artworks, especially those that involve mechanical and digital 
          production. The technique consists of the artist invoking a destabilization of the minimal, 
          or core, self and relies on 2 complementary strategies: hyperreflexivity and diminished 
          self-affection. In practice this state reflects a heightened awareness of aspects of 
          experience that are normally tacit or implicit, while the diminished self-affection 
          weakens the sense of existing as a subject of awareness. These processes necessarily 
          disrupt a person’s “grip” or “hold” on the conceptual or perceptual field of awareness 
          and provide access to consciousness at the limits of identity and subjective experience. 
          The instability caused to the underlying structure of experience manifests in a range 
          of anomalous self and world experiences. The result is a deconstruction of the concept 
          of authority, such that the viewer’s own subjectivity becomes the primary aspect of the 
          artwork.</p>`,
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
    disciplineTitle: 'Art',
    disciplineName: 'Art',
    collectionTitle: 'Nature Morté',
    collectionName: 'Nature_Morte',
    aboutCollection: `<h3>Rules of Nature Morté</h3>
    <ul>
    <li>1. Create a series of 64 pictures to be juxtaposed with the 64 hexagrams of the I Ching.</li>
    <li>2. Pictures must be composed with 1:1 aspect ratio and contain at least 1 and no more 
    than 2 subjects.</li>
    <li>3. Subjects must be flora or fauna smaller than 10”x10”x10” and isolated in the frame 
    on a solid background.</li>
    <li>4. Subjects must be photographed on either a black background or a frosted translucent 
    background.</li>
    <li>5. Subjects must be clearly lit from all angles in order to create sharp detail and 
    high contrast. If photographed on translucent background, then subject must also be lit 
    from below causing it to “float” on the background. If photographed on a black background, 
    then subject should be lit so that the background absorbs the light causing the subject 
    to “sink” into the background.</li>
    <li>6. Subjects should not be chosen to represent any specific hexagram, but after the 
    image is complete be assigned to the hexagram it seems to resonate with. </li>
    <li>7. No picture-hexagram relationship is binding and the relationship between them 
    can alter at any time.</li>
    </ul>`,
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
    disciplineTitle: 'Art',
    disciplineName: 'Art',
    collectionTitle: 'Starlight Meadows',
    collectionName: 'Starlight_Meadows',
    aboutCollection: `<h3>Story</h3>
    <p>On the last patch of farmland at the end of the world a play unfolds as if within a dream. 
    An amnesiac king abandons his kingdom to wander the land, a beggar. A trio of menacing 
    pigs arrive backed by an army of troglodytes and begin waging a campaign intimidation on 
    the sheep-folk of the land. Only a band of anarchic monkeys hold back the kingdom’s 
    complete collapse while searching for a means of restoring the king.</p>
    <h3>Background</h3>
    <p>Growing up, we learned how to be creative, to use imagination to pretend our way out of 
    boredom, and to make-believe whatever our hearts' desired. Everything is fluid in that 
    imaginary world where being exists only as an extension of will. Anything can be, was, or 
    could become, anything else. Logic doesn’t apply if things can be both A and not A; and 
    time has no compunction to flow in one direction there. </p>
    <p>In play, this is base, now it's a horse, that’s a sword, now it’s a spaceship, and so 
    on. Substituting one thing for another like this has, as a consequence, always felt 
    natural. Starlight Meadows relies on this substitutive play, daring realism to object 
    to the tension between the artifice and the imagination.</p>
    <h3>Rules of the Game</h3>
    <ul>
    <li>1. Create a series of pictures dramatizing your experience.</li>
    <li>2. Pictures must be composed with 3:2 aspect ratio.</li>
    <li>3. Work alone using yourself as a subject or figure in the material photographs.</li>
    <li>4. You are allowed to composite multiple exposures, but the final result must look realistic, not abstract.</li>
    <ul>`,
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
      { title: 'Yule', name: 'Yule', path: '/gallery/Starlight_Meadows/Yule', ratio: '3:2', shop: false, year: '2005',  tags: 'Digital Photography, Directorial' },
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
    disciplineTitle: 'Design',
    disciplineName: 'Design',
    collectionTitle: 'PXL8N',
    collectionName: 'PXL8N',
    images: [
      { title: 'Daycrawler', name: 'Daycrawler', path: '/gallery/PXL8N/Daycrawler', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design' },
      { title: 'VMB-I', name: 'VMB_I', path: '/gallery/PXL8N/VMB_I', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design' },
      { title: 'VMB-IV', name: 'VMB_IV', path: '/gallery/PXL8N/VMB_IV', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design' },
      { title: 'TSFTS', name: 'TSFTS', path: '/gallery/PXL8N/TSFTS', ratio: '1:1', shop: true, year: '2018', tags: 'Product Design' },
    ]
  },
  {
    disciplineTitle: 'Design',
    disciplineName: 'Design',
    collectionTitle: 'Coffee',
    collectionName: 'Coffee',
    images: [
      { title: 'Product Page', name: 'Product_Page_1', path: '/gallery/PXL8N/Product_Page_1', ratio: '3:2', shop: false, year: '2018', tags: 'Packaging Design' },
    ]
  },
  {
    disciplineTitle: 'Design',
    disciplineName: 'Design',
    collectionTitle: 'I Ching',
    collectionName: 'IChing',
    images: [
      { title: 'Product Page', name: 'Product_Page_1', path: '/gallery/PXL8N/Product_Page_1', ratio: '3:2', shop: false, year: '2018', tags: 'Packaging Design' },
    ]
  },
  {
    disciplineTitle: 'Web',
    disciplineName: 'Web',
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
    disciplineTitle: 'Web',
    disciplineName: 'Web',
    collectionTitle: 'National Park Guides',
    collectionName: 'National_Park_Guides',
    images: [
      { title: 'National Park Detail Page (Desktop/Light)', name: 'Park_Detail_Guide_Large_Light', path: '/gallery/National_Park_Guides/Park_Detail_Guide_Large_Light', ratio: '9:83', shop: false, year: '2020', tags: 'React' },
      { title: 'National Park Detail Page (Desktop/Dark)', name: 'Park_Detail_Guide_Large_Dark', path: '/gallery/National_Park_Guides/Park_Detail_Guide_Large_Dark', ratio: '9:41', shop: false, year: '2020', tags: 'React' },
    ]
  },
  {
    disciplineTitle: 'Web',
    disciplineName: 'Web',
    collectionTitle: 'Halter’s Cycles',
    collectionName: 'Halters_Cycles',
    images: [
      { title: 'Halter’s Cycles', name: 'Halters_Cycles', path: '/gallery/Web/Halters_Cycles', ratio: '3:2', shop: false, year: '2019', tags: 'WordPress, WooCommerce,  Printful, Photoshop' },
    ]
  },
  {
    disciplineTitle: 'Web',
    disciplineName: 'Web',
    collectionTitle: 'Hugh Johnson Advisors',
    collectionName: 'Hugh_Johnson_Advisors',
    images: [
      { title: 'Hugh Johnson Advisors', name: 'Hugh_Johnson_Advisors', path: '/gallery/Web/Hugh_Johnson_Advisors', ratio: '3:2', shop: false, year: '2018', tags: 'WordPress, HTML, CSS, Photoshop' },
    ]
  },
  {
    disciplineTitle: 'Code',
    disciplineName: 'Code',
    collectionTitle: 'PWA API/Full Stack',
    collectionName: 'PWA_API_Full_Stack',
    images: [
      { title: 'PWA API/Full Stack', name: 'PWA_API_Full_Stack', path: '/gallery/Code/PWA_API_Full_Stack', ratio: '3:2', shop: false, year: '2020', tags: 'JavaScript/NodeJS, MongoDB, NextJS, React, PWA/SPA, Service Workers, HTML/JSX, CSS/SCSS, Zeit Serverless Hosting' },
    ]
  },
  {
    disciplineTitle: 'Code',
    disciplineName: 'Code',
    collectionTitle: 'Pharma API/Backend',
    collectionName: 'Pharma_API_Backend',
    images: [
      { title: 'Pharma API/Backend', name: 'Pharma_API_Backend', path: '/gallery/Code/Pharma_API_Backend', ratio: '3:2', shop: false, year: '2015', tags: 'PHP, MySQL, Laravel, PDFLib, Mailgun, EFax, Composer, Apache, Docker, Alpine' },
    ]
  },
  {
    disciplineTitle: 'Code',
    disciplineName: 'Code',
    collectionTitle: 'Pharma API/Frontend',
    collectionName: 'Pharma_API_Frontend',
    images: [
      { title: 'Pharma API/Frontend', name: 'Pharma_API_Frontend', path: '/gallery/Code/Pharma_API_Frontend', ratio: '3:2', shop: false, year: '2015', tags: 'AngularJS, HTML/Pug, CSS/SCSS, NPM/Gulp, Apache, Docker, Alpine' },
    ]
  },
  {
    disciplineTitle: 'Code',
    disciplineName: 'Code',
    collectionTitle: 'Veeva Hybrid iPad App',
    collectionName: 'Veeva_Hybrid_iPad_App',
    images: [
      { title: 'Veeva Hybrid iPad App', name: 'Veeva_Hybrid_iPad_App', path: '/gallery/Code/Veeva_Hybrid_iPad_App', ratio: '3:2', shop: false, year: '2017', tags: 'AngularJS, HTML/Pug, CSS/SCSS, NPM/Grunt, Apache, Docker, Alpine' },
    ]
  },
  {
    disciplineTitle: 'Code',
    disciplineName: 'Code',
    collectionTitle: 'Ionic/Cordove Hybrid Mobile App',
    collectionName: 'Ionic_Cordove_Hybrid_Mobile_App',
    images: [
      { title: 'Ionic/Cordove Hybrid Mobile App', name: 'Ionic_Cordove_Hybrid_Mobile_App', path: '/gallery/Code/Ionic_Cordove_Hybrid_Mobile_App', ratio: '3:2', shop: false, year: '2016', tags: 'AngularJS, Ionic, HTML/Pug, CSS/SCSS, NPM/Grunt' },
    ]
  }
  
]

export default collection
