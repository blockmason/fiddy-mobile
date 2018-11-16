import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Παρουσιάστηκε ένα πρόβλημα με την επικοινωνία με τον διακομιστή, δοκιμάστε ξανά αργότερα.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Γεια σου Κόσμε`,
  noConnection: `Χωρίς σύνδεση`,
  retry: `Ξαναδοκιμάσετε`,
  submit: `YΠΟΒΟΛΗ`,
  next: `Επόμενο`,
  cancel: `Ακύρωση`,
  back: `Επιστροφή`,
  copy: `Αντιγραφή στο πρόχειρο`,
  confirmAccount: `Επιβεβαίωση`,
  createAccount: `Δημιουργία Λογαριασμού`,
  recoverAccount: `Επαναφορά Λογαριασμού`,
  removeAccount: `Κατάργηση Λογαριασμού`,
  updateAccount: `Ενημέρωση Λογαριασμού`,
  loginAction: `Ξεκλείδωμα`,
  enterPin: `ΠΑΡΑΚΑΛΟYΜΕ ΕΙΣΑΓΕΤΕ ΤΟ PIN ΣΑΣ`,
  changePin: `Αλλαγή PIN`,
  enterCurrentPin: `Εισαγωγή Τρέχοντος PIN`,
  logoutAction: `ΑΠΟΣYΝΔΕΣΗ`,
  seeAllActivity: `Δείτε Όλα τη Δραστηριότητα`,
  copiedClipboard: `Αντιγράφηκε στο Πρόχειρο`,
  pleaseWait: `Παρακαλούμε Περιμένετε`,
  addFriend: `Προσθήκη Φίλου`,
  addFriendConfirmationQuestion: `Είστε σίγουροι ότι θέλετε να προσθέσετε αυτόν το χρήστη ως φίλο;`,
  removeFriend: `Αφαίρεση Φίλου`,
  currentFriends: `Τρέχοντες Φίλοι`,
  removeFriendConfirmationQuestion: `Είστε βέβαιοι ότι θέλετε να αφαιρέσετε τον χρήστη αυτόν από φίλο;`,
  inviteFriends: `Προσκαλέστε Φίλους στο Lndr`,
  tryLndr: `Δοκιμάστε την εφαρμογή Lndr εδώ:`,
  friendInfo: `Περισσότερες πληροφορίες σχετικά με την φιλία αυτή:`,
  noFriends: `Προσθέστε μερικούς φίλους για να ξεκινήσετε!`,
  noMatches: `Δεν βρέθηκαν χρήστες που να ταιριάζουν`,
  noBalances: `Δεν έχετε καταγεγραμμένα χρέη`,
  addFriendButton: `Προσθήκη Φίλου`,
  alreadyFriendsButton: `Φίλοι`,
  friendShell: `Φίλος`,
  tip: `Συμβουλή:`,
  notice: `Ειδοποίηση:`,
  welcome: `Καλώς ήρθατε στο LNDR σας`,
  noBalanceWarning: `Δεν μπορέσαμε να φορτώσουμε το υπόλοιπο των χρημάτων σας αυτή τη στιγμή, δοκιμάστε ξανά αργότερα.`,
  totalBalance: `Σύνολο Yπόλοιπο:`,
  totalBalances: `Σύνολο Αντισυμβαλλόμενων:`,
  newTransaction: `Νέα Συναλλαγή`,
  needsReview: `Εν αναμονή Έγκρισης`,
  owesMe: `Μου οφείλουν`,
  iOwe: `Χρωστάω σε κάποιον`,
  newPassword: `Νέο Συνθηματικό (τουλάχιστον 8 χαρακτήρες)`,
  confirmPassword: `Επιβεβαίωση Συνθηματικού`,
  newPin: `Νέα 4-ψήφιο PIN`,
  enterNewPin: `ΠΑΡΑΚΑΛΟYΜΕ ΔΩΣΤΕ ΕΝΑ ΝΕΟ ΤΕΤΡΑΨΗΦΙΟ PIN`,
  confirmPin: `ΠΑΡΑΚΑΛΟYΜΕ ΕΠΙΒΕΒΑΙΩΣΤΕ ΤΟ PIN ΣΑΣ`,
  newAccount: `Δημιουργήστε έναν νέο λογαριασμό`,
  loginAccount: `Ξεκλειδώστε τον λογαριασμό σας`,
  recoverExistingAccount: `Ανάκτηση υπάρχοντος λογαριασμού`,
  recoverMnemonic: `Μνημονικό (12 λέξεις που εμφανίστηκαν \nμόλις δημιουργήσατε τον λογαριασμό σας)`,
  recoverMnemonicLengthError: `Το μνημονικό πρέπει να είναι ακριβώς 12 λέξεις`,
  successTitle: `Επιτυχία`,
  errorTitle: `Σφάλμα`,
  showMnemonic: `Εμφάνιση Μνημονικού 12 Λέξεων`,
  mnemonicExhortation: `Αυτή η φράση 12 λέξεων είναι απαραίτητη για την αποκατάσταση του λογαριασμού σας, παρακαλούμε κρατήστε την σε ασφαλές μέρος και μυστική`,
  addressExhortation: `Μπορείτε να στείλετε ETH ή οποιοδήποτε υποστηρίζεται ERC-20 κουπόνι για τη διεύθυνση πορτοφόλι σας.`,
  removeAccountTitle: `Είστε βέβαιοι ότι θέλετε να καταργήσετε το λογαριασμό σας από αυτήν τη συσκευή;`,
  removeAccountExhortation: `Βεβαιωθείτε ότι έχετε πρόσβαση στο μνημονικό σας για να επαναφέρετε το λογαριασμό σας αργότερα, καθώς πρόκειται για μόνιμη αφαίρεση των στοιχείων του λογαριασμού σας από αυτήν τη συσκευή.`,
  myAccount: `Ο Λογαριασμός μου`,
  setNickname: `Ορίστε ένα ψευδώνυμο, ώστε οι φίλοι σας να μπορούν να σας αναζητήσουν`,
  setEmail: `Ορίστε ένα email για να λαμβάνετε πληροφορίες σχετικά με ενημερώσεις του Lndr`,
  nickname: `Ψευδώνυμο (πεζά & αριθμοί)`,
  email: `Διεύθυνση Ηλεκτρονικού Ταχυδρομείου`,
  lndrVerified: {
    ok: `Εντάξει`,
    title: `Ορίστε υψηλότερο όριο οικισμού και την απόσυρση κρυπτο ποσά συμπληρώνοντας Γνωρίστε τις απαιτήσεις των πελατών σας.`,
    statusTitle: `Η τρέχουσα κατάσταση της επαλήθευσης σας είναι:`,
    tryAgain: `Δεν ήταν δυνατή η επαλήθευση της ταυτότητάς σας. Παρακαλούμε να υποβάλετε ξανά τα στοιχεία σας και να διασφαλίσει ότι οι φωτογραφίες σας είναι ευανάγνωστες.`,
    formMessage: `Παρακαλούμε συμπληρώστε όλα τα παρακάτω πεδία`,
    button: `Επιβεβαιώστε την ταυτότητα σας`,
    prefix: `Διαβάστε την `,
    linkTitle: `Πολιτική Απορρήτου `,
    postfix: `για το πώς θα γίνεται η διαχείριση των προσωπικών σας δεδομένων.`,
    upload: `Ανεβάστε ένα `,
    governmentId: `αστυνομικής ταυτότητάς`,
    selfie: `Ανεβάστε μια selfie με ταυτότητάς σας`,
    proofOfAddress: `Αποδεικτικό διεύθυνσης κατοικίας`,
    ifNotId: `(Αν όχι ID)`,
    agree: `Έχω διαβάσει και συμφωνώ με την Πολιτική `,
    agreeLink: `Προστασίας Προσωπικών Δεδομένων`,
    success: `KYC έχει υποβληθεί.`,
    idInfoHeader: `Παραδείγματα ID περιλαμβάνουν:`,
    passport: `Διαβατήριο`,
    drivers: `Αδεια οδήγησης`,
    national: `Εθνική ταυτότητα`,
    addressInfoHeader: `Παραδείγματα της απόδειξης της διεύθυνσης:`,
    bank: `Τράπεζα Δήλωση`,
    utility: `λογαριασμός κοινής ωφελείας`,
    other: `Άλλο έγγραφο`,
    chooseGovernmentPhoto: `Επιλέξτε κυβέρνηση ID φωτογραφίας`,
    chooseSelfiePhoto: `Επιλέξτε selfie Φωτογραφία`,
    chooseAddressPhoto: `Επιλέξτε Απόδειξη Διεύθυνση Φωτογραφίας`,
    emailRequired: `Χρειάζεται ένα e-mail για να επιβεβαιώσετε την ταυτότητά σας, κάντε κλικ στο "Αλλαγή Email"`,
    approved: `ΕΓΚΡΙΘΗΚΑΝ`,
    rejected: `ΑΠΟΡΡΙΦΘΗΚΕ`,
    pending: `Σε εκκρεμότητα`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Ονομα`,
      lastName: `Επίθετο`,
      street: `Διεύθυνση`,
      city: `Πόλη`,
      state: `Πολιτεία / Επαρχία`,
      postalCode: `Ταχυδρομικός Κώδικας`,
      country: `Επιλέξτε Χώρα`,
      phone: `Τηλεφωνικό νούμερο`,
      dob: `Ημερομηνία γέννησης (ΕΕΕΕ-ΜΜ-ΗΗ)`,
    },
    formErrors: {
      firstName: `Όνομα απαιτείται`,
      lastName: `Επώνυμο απαιτείται`,
      street: `Οδός απαιτείται`,
      city: `Πόλη απαιτείται`,
      state: `Πολιτεία / Επαρχία απαιτείται`,
      postalCode: `Απαιτείται Τ.Κ.`,
      country: `Χώρα απαιτείται`,
      phone: `Τηλέφωνο απαιτείται`,
      dob: `Ημερομηνία Γέννησης απαιτείται`,
      general: `Βεβαιωθείτε ότι έχετε συμπληρώσει όλα τα πεδία και επισυνάπτονται τις σωστές φωτογραφίες`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Το ψευδώνυμο πρέπει να είναι τουλάχιστον 3 χαρακτήρες.`,
      compositionViolation: `Το ψευδώνυμο μπορεί να περιέχει μόνο αριθμούς και πεζά γράμματα.`,
      duplicationViolation: `Το ψευδώνυμο χρησιμοποιείται ήδη`,
    },
    email: {
      compositionViolation: `Η μορφή του email είναι εσφαλμένη`,
      duplicationViolation: `Το εmail χρησιμοποιείται ήδη`,
    },
    pin: {
      lengthViolation: `Το PIN πρέπει να είναι τουλάχιστον 4 χαρακτήρες.`,
      matchViolation: `Τα PIN θα πρέπει να ταιριάζουν.`,
      failedHashComparison: `PIN δεν είναι έγκυρο, παρακαλούμε δοκιμάστε ξανά.`,
      updateSuccess: `Το PIN σας δεν έχει ενημερωθεί`,
      updateError: `Παρουσιάστηκε σφάλμα κατά την ενημέρωση του PIN σας`,
    },
    mnemonic: {
      lengthViolation: `Το μνημονικό θα πρέπει να έχουν τουλάχιστον 12 λέξεις.`,
      unableToValidate: `Το μνημονικό που δώσατε δεν είναι έγκυρο, παρακαλούμε δοκιμάστε ξανά.`,
    },
    setNickname: {
      success: `Το ψευδώνυμό σας αποθηκεύτηκε.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Το email σας αποθηκεύτηκε.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `Πρέπει να εισάγετε το PIN σας μετά`,
      bottom: `λεπτά αδράνειας`,
      update: `Ενημέρωση`,
      error: `Δεν ήμασταν σε θέση να ενημερώσουμε τις ρυθμίσεις του λογαριασμού σας`,
      success: `Η Λήξη Κλειδώματος Ενημερώθηκε`,
    },
    addFriend: {
      success: X => `Αίτημα Φιλίας εσταλεί σε @${X}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Αφαιρέθηκε από τους φίλους: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `Αδυναμία ενημέρωσης υπολοίπου Eth`,
      manage: `Διαχείριση ETH`,
    },
    sendEth: {
      error: {
        insufficient: `Δεν έχετε αρκετά ETH για τη συναλλαγή αυτή`,
        generic: `Παρουσιάστηκε κάποιο σφάλμα κατά τη μεταφορά, παρακαλούμε δοκιμάστε ξανά αργότερα`,
        address: `Παρακαλώ εισάγετε μια έγκυρη διεύθυνση`,
        amount: `Παρακαλώ εισάγετε ένα ποσό μεγαλύτερο από 0`,
        limitExceeded: (A, M) => `Μπορείτε να στείλετε μόνο ${CUR(A)} ${TL(A, M)} ανά εβδομάδα, παρακαλούμε επιλέξτε ένα μικρότερο ποσό`,
      },
      amount: `Ποσό προς Αποστολή`,
      address: `Διεύθυνση Προορισμού`,
      transfer: `Μεταφορά ETH`,
      transferAll: `Μεταφορά όλων`,
      balance: Y => `Το τρέχον υπόλοιπο ETH σας είναι ${typeof Y ==='string' ? Y.slice (0,8): ''} `,
      ethAddress: `Διεύθυνση Ethereum`,
      transferLowercase: `Μεταφορά Eth`,
      note: (A, M) => `Παρακαλώ σημειώστε: μπορείτε να μεταφέρετε μόνο ${CUR(A)} ${TL(A, M)} την εβδομάδα εκτός Lndr`,
      warning: (Z, A, M) => `Έχετε ${CUR(A)} ${Z} υπόλοιπο ${CUR(A)} ${TL(A, M)} στο όριό σας`,
    },
    sendERC20: {
      error: {
        insufficient: (name) => `Δεν έχετε αρκετά ${name} για τη συναλλαγή αυτή`,
        generic: `Παρουσιάστηκε κάποιο σφάλμα κατά τη μεταφορά, δοκιμάστε ξανά αργότερα`,
      },
      transfer: (name) => `Μεταφορά ${name}`,
      address: `Διεύθυνση Προορισμού`,
      balance: (name, balance) => `Το τρέχον υπόλοιπο ${name} σας είναι ${typeof balance === 'string' ? balance.slice (0,8): ''} `,
      tokenAddress: (name) => `Διεύθυνση ${name}`,
      txCost: (ethCost, currencyCost) => `Κόστος συναλλαγής: ${ethCost} ETH (${currencyCost})`,
    },
    panelHeaders: [
      `Πορτοφόλι Διεύθυνση`,
      `Crypto Υπόλοιπα`,
      `Yπόλοιπο BCPT`,
      `Κατάργηση Λογαριασμού`,
      `Ιστορικό Συναλλαγών ETH`,
      `Ενεργοποίηση PayPal`,
      `Αλλαγή Πρωτοβάθμια νομίσματος`,
      `Ξεκλείδωμα επιπλέον λειτουργίες`,
      `Αλλαγή Email`,
      `Αλλαγή PIN`,
      `Αλλαγή Λήξης Κλειδώματος`,
      `Μνημονικό`,
      `Ειδοποιήσεις`,
    ],
    viewEtherscan: `Δείτε το ιστορικό Etherscan`,
    profilePic: {
      change: `Αλλαγή Φωτογραφίας Προφίλ`,
      setError: `Yπήρξε ένα σφάλμα κατά τη ανέβασμα της εικόνας σας, παρακαλούμε δοκιμάστε ξανά αργότερα`,
      getError: `Παρουσιάστηκε κάποιο σφάλμα κατά την ανάκτηση της φωτογραφίας του προφίλ σας`,
      setSuccess: `Ενημερώθηκε η εικόνα του προφίλ σας`,
    },
    logoutSuccess: `Έχετε αποσυνδεθεί με επιτυχία!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: name => `Το τρέχον υπόλοιπο ${name} σας είναι`,

  welcomeView: {
    by: `ΚΑΤΑΣΚΕYΑΣΜΕΝΟ ΑΠΟ`,
    makeItEasy: `Το Lndr κάνει εύκολη την καταγραφή απλών χρεών`,
    weHelpFriends: `Βοηθάμε φίλους να ζουν, να εργάζονται και να παίζουν μαζί.`,
    len: `Len`,
    dot: `.`,
    der: `der`,
    shareDinner: `Μοιραστείτε Δείπνο`,
    fillTank: `Βάλτε Καύσιμα`,
    travelTogether: `Ταξιδέψτε Μαζί`,
    runEthereum: `Λειτουργούμε με ETH!`,
    firstLendingApp: `Η πρώτη εφαρμογή για δανεισμό από κινητό με την ασφάλεια της blockchain.`,
    greatConcert: `Παρακολουθήστε μια Μεγάλη Συναυλία`,
    youPlayWithFriends: `Παίζετε με φίλους;\n θα κρατήσουμε την καρτέλα...`,
    start: `Ξεκινήστε`,
  },

  walkthrough: {
    skip: `παραλείπω`,
    continue: `να συνεχίσει`,
    step1: {
      easyToUse: `Lndr είναι ο ευκολότερος τρόπος για να χωρίσει τους λογαριασμούς, τα έξοδα μετοχή και να εγκατασταθούν απλά τα χρέη με τους φίλους και την οικογένεια, όλα γίνονται με ασφάλεια στο blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Για να ξεκινήσετε με Lndr, θα πρέπει να προσθέσετε ένα φίλο.`,
      friendsScreen: `Επισκεφθείτε την οθόνη του φίλους για να αναζητήσετε, να προσθέσετε ή να καλέσει τους φίλους και την οικογένειά σας για να συνδεθείτε στο Lndr.`,
    },
    step3: {
      title: `Εγγραφή Συναλλαγής`,
      easy: `Διάσπαση ένα νομοσχέδιο ή με την προσθήκη ενός χρέους με έναν φίλο είναι εύκολο στην Lndr!`,
      selectFriend: `Επιλέξτε το φίλο σας, το νόμισμα και την ποσότητα.`,
      addMemo: `Προσθέστε μερικές σημειώσεις στο πλαίσιο σημείωμα και κάντε κλικ στην επιλογή Υποβολή.`,
    },
    step4: {
      title: `Διακανονισμός`,
      ready: `έτοιμος να Διακανονισμός?`,
      payPal: `Όταν ήρθε η ώρα να εγκατασταθούν με Lndr, \n- μπορείτε να επιλέξετε PayPal:`,
      ether: `- cryptocurrencies όπως Ether:`,
      cash: `- ή απλά να γράψετε ένα διακανονισμό σε μετρητά:`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `Multi-νόμισμα`,
      multiCurrency: `Lndr μπορείτε να παρακολουθείτε τις συναλλαγές σας, ακόμη και αν συμβεί σε διαφορετικά νομίσματα.`,
      exchangeRate: `Όταν αποφασίσετε να διευθετήσει με το φίλο σας, όλες οι συναλλαγές θα μετατραπούν σε πρωτογενή νόμισμά σας χρησιμοποιώντας την πιο συναλλαγματικές ισοτιμίες up-to-ημερομηνία.`,
      start: `Αρχίστε να χρησιμοποιείτε το Lndr!`,
    }
  },

  debtManagement: {
    shell: `Νέα Συναλλαγή`,
    add: `Προσθήκη Χρέους`,
    selectFriend: `Επιλέξτε`,
    lend: `Νέο Δάνειο`,
    borrow: `Νέο Χρέος`,
    owesMe: `μου χρωστάει`,
    iOwe: `χρωστώ`,
    iLent: `Ένας φίλος μου χρωστάει`,
    iBorrowed: `Χρωστάω σε έναν φίλο`,
    settleUpLower: `Διακανονισμός`,
    amountToSettle: `Ποσό προς διακανονισμό`,
    total: `Σύνολο`,
    record: `καταγραφή`,
    records: `καταγραφές`,
    chooseCurrency: `Επιλέξτε ένα νόμισμα`,

    createError: {
      amountTooLow: `Το ποσό πρέπει να είναι μεγαλύτερο από $0`,
      amountTooHigh: `Το ποσό πρέπει να είναι μικρότερο από $1.000.000.000`,
      selfAsFriend: `Δεν μπορείτε να δημιουργήσετε το χρέος με τον εαυτό σας, επιλέξτε κάποιον άλλο φίλο`,
      pending: `Παρακαλούμε επιλύστε την εκκρεμή σας συναλλαγή με τον χρήστη αυτόν πριν τη δημιουργία κάποιας άλλης`,
      insufficientEth: E => `Θα χρειαστείτε τουλάχιστον ${E} ETH για διακανονισμό, μεταβείτε στις Ρυθμίσεις για να δείτε το υπόλοιπό σας`,
    },
    fields: {
      currency: `Νόμισμα`,
      amount: `Ποσό`,
      settlementAmount: `Ποσό Διακανονισμού`,
      selectFriend: `Φίλος`,
      memo: `Σημείωμα`,
      direction: `Επιλέξτε την Σωστή Κατάσταση`,
    },
    memo: {
      example: `Τύπος σημείωσης εδώ`,
    },
    direction: {
      lend: X => `${X} μου χρωστάει`,
      borrow: X => `Οφείλω σε ${X}`,
      initiatedLend: X => `${X} λέει μου χρωστά`,
      initiatedBorrow: X => `${X} λέει χρωστάμε`,
      pendingLend: X => `@${X} σου χρωστά`,
      pendingBorrow: X => `Xρωστάτε @${X}`,
      pendingLendSettlement: S => `@${S.debtorNickname} ζητά διακανονισμό σε ${S.settlementCurrency}`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} θέλει να πραγματοποιήσει διακανονισμό μαζί σας σε ${S.settlementCurrency}`,
      pendingLendSettlementMe: S => `Zητήσατε να πραγματοποιήσετε διακανονισμό με @${S.debtorNickname} σε ${S.settlementCurrency}`,
      pendingBorrowSettlementMe: S => `Zητήσατε από @${S.creditorNickname} διακανονισμό σε ${S.settlementCurrency}`,
    },
    pending: {
      success: F => `Το υπόλοιπο του χρέους εστάλη σε @${F.nickname}`,
      error: generalCommunicationError
    },
    pendingParens: `(σε εκκρεμότητα)`,
    confirmation: {
      transaction: CP => `Η συναλλαγή με ${CP} επιβεβαιώθηκε με επιτυχία`,
      settlement: CP => `Ο διακανονισμού με ${CP} επιβεβαιώθηκε με επιτυχία`,
      error: `Αδυναμία επιβεβαίωσης της συναλλαγής αυτή τη στιγμή, παρακαλούμε δοκιμάστε ξανά αργότερα`,
    },
    rejection: {
      success: `Η συναλλαγή απορρίφθηκε`,
      error: `Αδυναμία απόρριψης συναλλαγής αυτή τη στιγμή, δοκιμάστε ξανά αργότερα`,
    },
    balances: {
      error: `Αδυναμία φόρτωσης υπολοίπου αυτή τη στιγμή, δοκιμάστε ξανά αργότερα`,
    },
    for: M => `για ${M}`,
    settleUp: `Διακανονισμός`,
    settleTotal: `Σύνολο Διακανονισμού`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Διακανονισμός για': 'Αίτηση διακανονισμού για'} ${A}`,
    recordSettleUpMemo: `Γίνεται διακανονισμός`,
    balanceByCurrency: `Λεπτομέριες`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `Ο διακανονισμός σας με ${X} απέτυχε λόγω ανεπαρκούς ποσού`,
        generic: X => `Παρουσιάστηκε κάποιο σφάλμα κατά την επεξεργασία του διακανονισμού σας με ${X}`,
      }
    },
    eth: `Διακανονισμός Με ETH`,
    erc20: name => `Settle with ${name}`,
    paypal: `Διακανονισμός Με PayPal`,
    nonPayment: `Καταγράψτε έναν Διακανονισμό`,
    select: `Επιλογή τύπου Οικισμός`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Σπίτι`,
    friends: `Φίλοι`,
    activity: `Δραστηριότητα`,
  },

  notifications: {
    toggleNotifications: `Εναλλαγή Ειδοποιήσεων`,
    enable: `Ενεργοποίηση`,
    disable: `Απενεργοποίηση`,
  },

  pendingTransactionsLanguage: {
    shell: `Συναλλαγή σε Εκκρεμότητα`,
    title: `Σε εκκρεμότητα`,
    memo: `Σημείωση:`,
    for: `Για`,
    none: `Δεν διαθέτετε εκκρεμείς συναλλαγές`,
    confirmationQuestion: `Σίγουρα θέλετε να επιβεβαιώσει αυτή τη συναλλαγή;`,
    pendingAnnouncement: `Η συναλλαγή αυτή βρίσκεται σε αναμονή προς επιβεβαίωση από το άλλο μέρος.`,
    bilateral: `Αναμονή μεταφοράς για ολοκλήρωση`,
    confirm: `Επιβεβαίωση`,
    reject: `Απόρριψη Συναλλαγής`,
    rejectRequest: `Απόρριψη`,
    cancel: `Ακύρωση Συναλλαγής`,
    direction: {
      lend: (X, Z) => `@${X} σας χρωστάει ${Z}`,
      borrow: (X, Z) => `Xρωστάτε @${X} ${Z}`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Διακανονισμός σε εκκρεμότητα`,
    title: `Σε εκκρεμότητα`,
    none: `Δεν διαθέτετε διακανονισμούς σε εκκρεμότητα`,
    confirm: `Επιβεβαίωση`,
    reject: `Απόρριψη Διακανονισμού`,
    cancel: `Ακύρωση Διακανονισμού`,
  },

  recentTransactionsLanguage: {
    title: `Ολοκληρώθηκε`,
    none: `Δεν διαθέτετε ολοκληρωμένες συναλλαγές`,
    direction: {
      lend: (X, Z) => `Ο/Η @${X} σας χρωστάει ${Z}`,
      borrow: (X, Z) => `Xρωστάτε @${X} ${Z}`
    },
    balance: `Yπόλοιπο`,
    consolidatedBalance: `Yπόλοιπο`,
    friends: FS => `(από ${FS} ${FS === 1 ? 'φίλος' :'φίλοι'})`,
  },

  tabs: {
    home: `Σπίτι `,
    friends: `Φίλοι`,
    activity: `Δραστηριότητα`,
  },

  confirmation: {
    shell: `Επιβεβαίωση`,
    done: `Έγινε`,
    create: {
      start: `Στείλαμε την καταγραφή στον `,
      end: ` προς επιβεβαίωση.`,
    },
    confirm: {
      start: `Επιβεβαιώσαμε την καταγραφή από τον `,
      end: `.`,
    },
    reject: {
      start: `Ενημερώσαμε τον `,
      end: ` ότι απορρίψατε την καταγραφή αυτή.`,
    },
    confirmFriend: {
      start: `Είστε τώρα φίλοι με τον `,
      end: `!`,
    },
    rejectFriend: {
      start: `Έχετε απορρίψει το αίτημα φιλίας του `,
      end: `.`,
    },
    rejectOutboundFriendRequest: {
      start: `Έχετε ακυρώσει το αίτημα φιλίας σε `,
      end: `.`,
    },
    ethSent: {
      start: `Έχετε στείλει με επιτυχία `,
      end: ` ETH και το hash της συναλλαγής σας είναι `,
    },
    erc20Sent: {
      start: `Έχετε στείλει με επιτυχία `,
      end: ` και το hash της συναλλαγής σας είναι `,
    },
    requestPayPalPayee: {
      start: `Έχουμε αφήσει `,
      end: ` γνωρίζουμε ότι θα θέλατε να εγκατασταθούν με PayPal.`,
    },
    requestPayPalPayment: {
      start: `Έχουμε αφήσει `,
      end: ` γνωρίζουμε ότι θα θέλατε να πληρώσει με PayPal.`,
    },
    settledWithPayPal: {
      start: `Έχουμε αφήσει `,
      end: ` ξέρετε ότι έχετε εγκαταστάθηκαν με PayPal.`,
    },
    kycSuccess: {
      start: `Ευχαριστώ! Ο λογαριασμός σας έχει επαληθευτεί.

      `,
      end: `Θα ειδοποιηθείτε όταν πρόσθετες λειτουργίες σας είναι ξεκλείδωτη.`
    },
    status: `Μπορείτε να δείτε την κατάσταση της συναλλαγής στην `,
    activity: `καρτέλα δραστηριότητας.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Αίτημα Φιλίας`,
    message: `Αιτήματα φιλίας`,
    request: F => `Ο/Η @${F} θέλει να γίνετε φίλοι!`,
    outbound: F => `Έχετε στείλει ένα αίτημα φιλίας σε @${F}`
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `Κάνοντας κλικ παρακάτω, επιβεβαιώνετε ότι έχετε διαβάσει και συμφωνήσετε με την πολιτική απορρήτου της Blockmason. Το Blockmason μπορεί να χρησιμοποιήσει τη διεύθυνση ηλεκτρονικού ταχυδρομείου σας για να στείλει ενημερώσεις σχετικά με το Blockmason και το LNDR. Ακολουθεί ένας σύνδεσμος προς την πολιτική απορρήτου μας:`,
  },

  payPalLanguage: {
    connectPayPal: `Συνδέστε το PayPal`,
    connectSuccess: `PayPal ενεργοποιηθεί με επιτυχία.`,
    disconnectPayPal: `Αποσύνδεση PayPal`,
    disconnected: `PayPal αποσυνδεθεί.`,
    requestPayPalPayment: `Αίτηση PayPal Πληρωμή`,
    sendWithPayPal: `Αποστολή με PayPal`,
    enablePayPal: `Ενεργοποίηση PayPal`,
    requestPayPalPayee: `Ζητήστε PayPal`,
    enablePayPalForFriend: F => `Η ενεργοποίηση PayPal επιτρέπει @${F} για να πληρώσει you.`,
    friendNotEnabled: F => `@${F} δεν έχει ενεργοποιηθεί PayPal πληρωμές.`,
    friendRequestedConnect: F => `@${F} θέλει να σας πληρώσει μέσω PayPal`,
    requestFriendConnect: F => `Θα ζητηθεί @${F} για να ενεργοποιήσετε PayPal`,
    feesNotification: `Δεν περιλαμβάνονται αμοιβές PayPal`,
    feesInformationHeader: `PayPal Τέλη πληροφορίες`,
    feesInformation: `1. Ο λογαριασμός σας PayPal πρέπει να συνδέεται με έναν τραπεζικό λογαριασμό.
    
2. Πληρωμή σε νόμισμα διαφορετικό από το νόμισμα της τράπεζάς σας θα υποστούν ένα πρόστιμο $ 0,35.

3. Διεθνής τέλη μεταφοράς:
    ΗΠΑ στον Καναδά / Ευρώπης: $ 2.99
    ΗΠΑ για να οπουδήποτε αλλού: $ 4.99

4. Τα τέλη αυτά δεν είναι ολοκληρωμένη. Για τις πιο πρόσφατες πληροφορίες, παρακαλούμε επισκεφθείτε την ιστοσελίδα:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Αφγανιστάν`, code: 'AFG' },
    { name: `Αλβανία`, code: 'ALB' },
    { name: `Αλγερία`, code: 'DZA' },
    { name: `Ανδόρα`, code: 'AND' },
    { name: `Αγκόλα`, code: 'AGO' },
    { name: `Ανγκουίλα`, code: 'AIA' },
    { name: `Ανταρκτική`, code: 'ATA' },
    { name: `Αντίγκουα και Μπαρμπούντα`, code: 'ATG' },
    { name: `Αργεντίνη`, code: 'ARG' },
    { name: `Αρμενία`, code: 'ARM' },
    { name: `Αρούμπα`, code: 'ABW' },
    { name: `Αυστραλία`, code: 'AUS' },
    { name: `Αυστρία`, code: 'AUT' },
    { name: `Αζερμπαϊτζάν`, code: 'AZE' },
    { name: `Μπαχάμες`, code: 'BHS' },
    { name: `Μπαχρέιν`, code: 'BHR' },
    { name: `Μπαγκλαντές`, code: 'BGD' },
    { name: `Μπαρμπάντος`, code: 'BRB' },
    { name: `Λευκορωσία`, code: 'BLR' },
    { name: `Βέλγιο`, code: 'BEL' },
    { name: `Μπελίζ`, code: 'BLZ' },
    { name: `Μπενίν`, code: 'BEN' },
    { name: `Βερμούδα`, code: 'BMU' },
    { name: `Μπουτάν`, code: 'BTN' },
    { name: `Βολιβία`, code: 'BOL' },
    { name: `Βοσνία και Ερζεγοβίνη`, code: 'BIH' },
    { name: `Μποτσουάνα`, code: 'BWA' },
    { name: `Βραζιλία`, code: 'BRA' },
    { name: `Μπρουνέι`, code: 'BRN' },
    { name: `Βουλγαρία`, code: 'BGR' },
    { name: `Μπουρκίνα Φάσο`, code: 'BFA' },
    { name: `Μπουρούντι`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Καμπότζη`, code: 'KHM' },
    { name: `Καμερούν`, code: 'CMR' },
    { name: `Καναδάς`, code: 'CAN' },
    { name: `νησιά Καϊμάν`, code: 'CYM' },
    { name: `Δημοκρατία Κεντρικής Αφρικής`, code: 'CAF' },
    { name: `Τσαντ`, code: 'TCD' },
    { name: `χιλή`, code: 'CHL' },
    { name: `Κίνα`, code: 'CHN' },
    { name: `Κολομβία`, code: 'COL' },
    { name: `Κομόρες`, code: 'COM' },
    { name: `Κογκό`, code: 'COG' },
    { name: `Κογκό`, code: 'COD' },
    { name: `νησιά Κουκ`, code: 'COK' },
    { name: `Κόστα Ρίκα`, code: 'CRI' },
    { name: `Ακτή του Ελεφαντοστού`, code: 'CIV' },
    { name: `Κροατία`, code: 'HRV' },
    { name: `Κούβα`, code: 'CUB' },
    { name: `Κουράσω`, code: 'CUW' },
    { name: `Κύπρος`, code: 'CYP' },
    { name: `Τσεχία`, code: 'CZE' },
    { name: `Δανία`, code: 'DNK' },
    { name: `Τζιμπουτί`, code: 'DJI' },
    { name: `Ντομίνικα`, code: 'DMA' },
    { name: `Δομινικανή Δημοκρατία`, code: 'DOM' },
    { name: `Εκουαδόρ`, code: 'ECU' },
    { name: `Αίγυπτος`, code: 'EGY' },
    { name: `Ελ Σαλβαδόρ`, code: 'SLV' },
    { name: `Ισημερινή Γουινέα`, code: 'GNQ' },
    { name: `Ερυθραία`, code: 'ERI' },
    { name: `Εσθονία`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Αιθιοπία`, code: 'ETH' },
    { name: `Φίτζι`, code: 'FJI' },
    { name: `Φινλανδία`, code: 'FIN' },
    { name: `Γαλλία`, code: 'FRA' },
    { name: `Γαλλική Γουιάνα`, code: 'GUF' },
    { name: `Γαλλική Πολυνησία`, code: 'PYF' },
    { name: `Γκαμπόν`, code: 'GAB' },
    { name: `Γκάμπια`, code: 'GMB' },
    { name: `Γεωργία`, code: 'GEO' },
    { name: `Γερμανία`, code: 'DEU' },
    { name: `Γκάνα`, code: 'GHA' },
    { name: `Γιβραλτάρ`, code: 'GIB' },
    { name: `Ελλάδα`, code: 'GRC' },
    { name: `Γροιλανδία`, code: 'GRL' },
    { name: `Γρενάδα`, code: 'GRD' },
    { name: `Γουαδελούπη`, code: 'GLP' },
    { name: `Γκουάμ`, code: 'GUM' },
    { name: `Γουατεμάλα`, code: 'GTM' },
    { name: `Γκινέα`, code: 'GIN' },
    { name: `Γουινέα-Μπισάου`, code: 'GNB' },
    { name: `Γουιάνα`, code: 'GUY' },
    { name: `Αΐτη`, code: 'HTI' },
    { name: `Βατικάνο`, code: 'VAT' },
    { name: `Ονδούρα`, code: 'HND' },
    { name: `Χονγκ Κονγκ`, code: 'HKG' },
    { name: `Ουγγαρία`, code: 'HUN' },
    { name: `Ισλανδία`, code: 'ISL' },
    { name: `Ινδία`, code: 'IND' },
    { name: `Ινδονησία`, code: 'IDN' },
    { name: `Ιράν`, code: 'IRN' },
    { name: `Ιράκ`, code: 'IRQ' },
    { name: `Ιρλανδία`, code: 'IRL' },
    { name: `Νήσος του Μαν`, code: 'IMN' },
    { name: `Ισραήλ`, code: 'ISR' },
    { name: `Ιταλία`, code: 'ITA' },
    { name: `Ιαμαϊκή`, code: 'JAM' },
    { name: `Ιαπωνία`, code: 'JPN' },
    { name: `Ιορδανία`, code: 'JOR' },
    { name: `Καζακστάν`, code: 'KAZ' },
    { name: `Κενύα`, code: 'KEN' },
    { name: `Κιριμπάτι`, code: 'KIR' },
    { name: `Κορέας (ΛΔΚ)`, code: 'PRK' },
    { name: `Κορέα (ROK)`, code: 'KOR' },
    { name: `Κουβέιτ`, code: 'KWT' },
    { name: `Κιργιστάν`, code: 'KGZ' },
    { name: `Λάος`, code: 'LAO' },
    { name: `Λατβία`, code: 'LVA' },
    { name: `Λίβανος`, code: 'LBN' },
    { name: `Λεσόθο`, code: 'LSO' },
    { name: `Λιβερία`, code: 'LBR' },
    { name: `Λιβύη`, code: 'LBY' },
    { name: `Λιχτενστάιν`, code: 'LIE' },
    { name: `Λιθουανία`, code: 'LTU' },
    { name: `Λουξεμβούργο`, code: 'LUX' },
    { name: `Μακάο`, code: 'MAC' },
    { name: `Μακεδόνια`, code: 'MKD' },
    { name: `Μαδαγασκάρη`, code: 'MDG' },
    { name: `Μαλάουι`, code: 'MWI' },
    { name: `Μαλαισία`, code: 'MYS' },
    { name: `Μαλδίβες`, code: 'MDV' },
    { name: `Μάλι`, code: 'MLI' },
    { name: `Μάλτα`, code: 'MLT' },
    { name: `Νήσοι Μάρσαλ`, code: 'MHL' },
    { name: `Μαρτινίκα`, code: 'MTQ' },
    { name: `Μαυριτανία`, code: 'MRT' },
    { name: `Μαυρίκιος`, code: 'MUS' },
    { name: `Μεξικό`, code: 'MEX' },
    { name: `Μικρονησία`, code: 'FSM' },
    { name: `Μολδαβία`, code: 'MDA' },
    { name: `Μονακό`, code: 'MCO' },
    { name: `Μογγολία`, code: 'MNG' },
    { name: `Μαυροβούνιο`, code: 'MNE' },
    { name: `Μοντσεράτ`, code: 'MSR' },
    { name: `Μαρόκο`, code: 'MAR' },
    { name: `Μοζαμβίκη`, code: 'MOZ' },
    { name: `Μιανμάρ`, code: 'MMR' },
    { name: `Ναμίμπια`, code: 'NAM' },
    { name: `Ναουρού`, code: 'NRU' },
    { name: `Νεπάλ`, code: 'NPL' },
    { name: `Ολλανδία`, code: 'NLD' },
    { name: `Νέα Καληδονία`, code: 'NCL' },
    { name: `Νέα Ζηλανδία`, code: 'NZL' },
    { name: `Νικαράγουα`, code: 'NIC' },
    { name: `Νίγηρας`, code: 'NER' },
    { name: `Νιγηρία`, code: 'NGA' },
    { name: `Νιούε`, code: 'NIU' },
    { name: `Βορεια Νησια Μαριανα`, code: 'MNP' },
    { name: `Νορβηγία`, code: 'NOR' },
    { name: `Ομάν`, code: 'OMN' },
    { name: `Πακιστάν`, code: 'PAK' },
    { name: `Παλάου`, code: 'PLW' },
    { name: `Παλαιστίνη`, code: 'PSE' },
    { name: `Παναμάς`, code: 'PAN' },
    { name: `Παπούα Νέα Γουινέα`, code: 'PNG' },
    { name: `Παραγουάη`, code: 'PRY' },
    { name: `Περού`, code: 'PER' },
    { name: `Φιλιππίνες`, code: 'PHL' },
    { name: `Πίτκερν`, code: 'PCN' },
    { name: `Πολωνία`, code: 'POL' },
    { name: `Πορτογαλία`, code: 'PRT' },
    { name: `Πουέρτο Ρίκο`, code: 'PRI' },
    { name: `Κατάρ`, code: 'QAT' },
    { name: `Επανένωση`, code: 'REU' },
    { name: `Ρουμανία`, code: 'ROU' },
    { name: `Ρωσική Ομοσπονδία`, code: 'RUS' },
    { name: `Ρουάντα`, code: 'RWA' },
    { name: `Άγιος Βαρθολομαίος`, code: 'BLM' },
    { name: `Αγία Ελένη, της Αναλήψεως και Τριστάν ντα Κούνια`, code: 'SHN' },
    { name: `Άγιος Χριστόφορος και Νέβις`, code: 'KNA' },
    { name: `Αγία Λουκία`, code: 'LCA' },
    { name: `saint Martin`, code: 'MAF' },
    { name: `Άγιος Πέτρος και Μικελόν`, code: 'SPM' },
    { name: `Άγιος Βικέντιος και Γρεναδίνες`, code: 'VCT' },
    { name: `Σαμόα`, code: 'WSM' },
    { name: `Σαν Μαρίνο`, code: 'SMR' },
    { name: `Σάο Τομέ και Πρίνσιπε`, code: 'STP' },
    { name: `Σαουδική Αραβία`, code: 'SAU' },
    { name: `Σενεγάλη`, code: 'SEN' },
    { name: `Σερβία`, code: 'SRB' },
    { name: `Σεϋχέλλες`, code: 'SYC' },
    { name: `Σιέρρα Λεόνε`, code: 'SLE' },
    { name: `Σιγκαπούρη`, code: 'SGP' },
    { name: `Άγιος Μαρτίνος`, code: 'SXM' },
    { name: `Σλοβακία`, code: 'SVK' },
    { name: `Σλοβενία`, code: 'SVN' },
    { name: `Νησιά του Σολομώντα`, code: 'SLB' },
    { name: `Σομαλία`, code: 'SOM' },
    { name: `Νότια Αφρική`, code: 'ZAF' },
    { name: `Νότιο Σουδάν`, code: 'SSD' },
    { name: `Ισπανία`, code: 'ESP' },
    { name: `Σρι Λάνκα`, code: 'LKA' },
    { name: `Σουδάν`, code: 'SDN' },
    { name: `Σουρινάμ`, code: 'SUR' },
    { name: `Σουηδία`, code: 'SWE' },
    { name: `Ελβετία`, code: 'CHE' },
    { name: `Αραβική Δημοκρατία της Συρίας`, code: 'SYR' },
    { name: `Ταϊβάν`, code: 'TWN' },
    { name: `Τατζικιστάν`, code: 'TJK' },
    { name: `Τανζανία`, code: 'TZA' },
    { name: `Ταϊλάνδη`, code: 'THA' },
    { name: `Τιμόρ-Λέστε`, code: 'TLS' },
    { name: `Να πάω`, code: 'TGO' },
    { name: `Τοκελάου`, code: 'TKL' },
    { name: `Τόνγκα`, code: 'TON' },
    { name: `Τρινιντάντ και Τομπάγκο`, code: 'TTO' },
    { name: `Τυνησία`, code: 'TUN' },
    { name: `Τουρκία`, code: 'TUR' },
    { name: `Τουρκμενιστάν`, code: 'TKM' },
    { name: `Νήσοι Τερκς και Κάικος`, code: 'TCA' },
    { name: `Τουβαλού`, code: 'TUV' },
    { name: `Ουγκάντα`, code: 'UGA' },
    { name: `Ουκρανία`, code: 'UKR' },
    { name: `Ηνωμένα Αραβικά Εμιράτα`, code: 'ARE' },
    { name: `Ηνωμένο Βασίλειο`, code: 'GBR' },
    { name: `Ηνωμένες πολιτείες Αμερικής`, code: 'USA' },
    { name: `Ηνωμένες Πολιτείες Μικρά απομονωμένα νησιά`, code: 'UMI' },
    { name: `Ουρουγουάη`, code: 'URY' },
    { name: `Ουζμπεκιστάν`, code: 'UZB' },
    { name: `Βανουάτου`, code: 'VUT' },
    { name: `Βενεζουέλα`, code: 'VEN' },
    { name: `Βιετνάμ`, code: 'VNM' },
    { name: `Βρετανικές Παρθένοι Νήσοι`, code: 'VGB' },
    { name: `Αμερικανικές Παρθένοι Νήσοι`, code: 'VIR' },
    { name: `Δυτική Σαχάρα`, code: 'ESH' },
    { name: `Γέμενη`, code: 'YEM' },
    { name: `Ζάμπια`, code: 'ZMB' },
    { name: `Ζιμπάμπουε`, code: 'ZWE' },
  ]
}
