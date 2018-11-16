import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Có vấn đề xảy ra khi đang kết nối với máy chủ, vui lòng thử lại sau.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Chào thế giới`,
  noConnection: `Không có kết nối`,
  retry: `Thử lại`,
  submit: `GỬI`,
  next: `Kế tiếp`,
  cancel: `Hủy bỏ`,
  back: `Quay lại`,
  copy: `Sao chép vào clipboard`,
  confirmAccount: `Xác nhận`,
  createAccount: `Tạo tài khoản`,
  recoverAccount: `Khôi phục tài khoản`,
  removeAccount: `Xoá tài khoản`,
  updateAccount: `Cập nhật tài khoản`,
  loginAction: `Mở khóa`,
  enterPin: `VUI LÒNG NHẬP MÃ PIN`,
  changePin: `Thay đổi mã PIN`,
  enterCurrentPin: `Nhập mã PIN hiện tại`,
  logoutAction: `ĐĂNG XUẤT`,
  seeAllActivity: `Xem tất cả Hoạt động`,
  copiedClipboard: `Đã sao chép vào clipboard`,
  pleaseWait: `Vui lòng chờ`,
  addFriend: `Thêm bạn`,
  addFriendConfirmationQuestion: `Bạn có chắc chắn muốn thêm người dùng này như một người bạn?`,
  removeFriend: `Hủy bỏ bạn bè`,
  currentFriends: `Bạn bè hiện tại`,
  removeFriendConfirmationQuestion: `Bạn có chắc chắn muốn xoá người dùng này như một người bạn?`,
  inviteFriends: `Mời bạn bè tham gia Lndr`,
  tryLndr: `Trải nghiệm ứng dụng Lndr tại đây:`,
  friendInfo: `Xem chi tiết về tình bạn này:`,
  noFriends: `Thêm một số người bạn để bắt đầu!`,
  noMatches: `Không tìm thấy người dùng phù hợp`,
  noBalances: `Bạn không có khoản nợ được ghi nhận`,
  addFriendButton: `Thêm bạn`,
  alreadyFriendsButton: `Bạn bè`,
  friendShell: `Bạn bè`,
  tip: `Mẹo nhỏ:`,
  notice: `Chú ý:`,
  welcome: `Chào mừng bạn đến với LNDR`,
  noBalanceWarning: `Không thể tải số tiền còn lại của bạn ở thời điểm hiện tại, vui lòng thử lại sau.`,
  totalBalance: `Tổng Số tiền còn lại:`,
  totalBalances: `Tổng Các bên tham gia:`,
  newTransaction: `Giao dịch mới`,
  needsReview: `Chờ phê duyệt`,
  owesMe: `Người khác nợ tôi`,
  iOwe: `Tôi nợ người khác`,
  newPassword: `Mật khẩu mới (tối thiểu 8 ký tự)`,
  confirmPassword: `Xác nhận mật khẩu`,
  newPin: `4 chữ số mã PIN mới`,
  enterNewPin: `VUI LÒNG CÀI ĐẶT 4 CHỮ SỐ MÃ PIN MỚI`,
  confirmPin: `VUI LÒNG XÁC NHẬN MÃ PIN CỦA BẠN`,
  newAccount: `Tạo tài khoản mới`,
  loginAccount: `Mở khóa tài khoản của bạn`,
  recoverExistingAccount: `Khôi phục tài khoản đã có`,
  recoverMnemonic: `Gợi ý (12 chữ hiển thị \nkhi bạn đã tạo tài khoản)`,
  recoverMnemonicLengthError: `Gợi ý phải chính xác 12 chữ`,
  successTitle: `Thành công`,
  errorTitle: `Lỗi`,
  showMnemonic: `Hiển thị 12-Chữ Gợi ý`,
  mnemonicExhortation: `Cụm 12 chữ này cần thiết để khôi phục lại tài khoản của bạn, xin vui lòng giữ nó an toàn và bảo mật`,
  addressExhortation: `Bạn có thể gửi ETH hoặc bất kỳ hỗ trợ ERC-20 dấu hiệu đến địa chỉ ví của bạn.`,
  removeAccountTitle: `Bạn có chắc chắn muốn xóa tài khoản của bạn từ thiết bị này?`,
  removeAccountExhortation: `Hãy chắc chắn rằng bạn có thể truy cập vào gợi ý ghi nhớ để khôi phục lại tài khoản của bạn sau này, do thao tác này sẽ xóa bỏ vĩnh viễn thông tin tài khoản của bạn từ thiết bị này.`,
  myAccount: `Tài khoản của tôi`,
  setNickname: `Đặt biệt danh để bạn bè của bạn có thể tìm kiếm bạn`,
  setEmail: `Đặt email để nhận thông tin cập nhật về Lndr`,
  nickname: `Biệt danh (chữ thường & số)`,
  email: `Địa chỉ email`,
  lndrVerified: {
    ok: `được`,
    title: `Đặt một lượng giới hạn giải quyết và rút crypto cao hơn bằng cách hoàn thành Biết yêu cầu khách hàng của bạn.`,
    statusTitle: `Tình trạng hiện tại của xác minh của bạn là:`,
    tryAgain: `Chúng tôi không thể xác minh danh tính của bạn. Vui lòng gửi thông tin của bạn và đảm bảo rằng ảnh của bạn có đủ điều kiện.`,
    formMessage: `Hãy điền vào tất cả các lĩnh vực sau đây`,
    button: `Xác minh danh tính của bạn`,
    prefix: `Đọc`,
    linkTitle: `Chính sách bảo mật `,
    postfix: `của chúng tôi để biết thông tin cá nhân của bạn sẽ được xử lý như thế nào.`,
    upload: `Tải lên một `,
    governmentId: `ID do chính phủ ban hành`,
    selfie: `Tải lên ảnh tự chụp với ID do chính phủ cấp`,
    proofOfAddress: `Chứng minh địa chỉ`,
    ifNotId: `(Nếu không nói là ID)`,
    agree: `Tôi đã đọc và đồng ý với `,
    agreeLink: `Chính sách bảo mật`,
    success: `KYC đã được gửi.`,
    idInfoHeader: `Ví dụ về các ID bao gồm:`,
    passport: `Hộ chiếu`,
    drivers: `Băng lai`,
    national: `Chứng minh nhân dân`,
    addressInfoHeader: `Ví dụ về các bằng chứng về địa chỉ:`,
    bank: `Bản Tuyên Bố Ngân hàng`,
    utility: `Hóa đơn tiện ích`,
    other: `Tài liệu khác`,
    chooseGovernmentPhoto: `Chọn Chính phủ ID Ảnh`,
    chooseSelfiePhoto: `Chọn chụp ảnh tự sướng Ảnh`,
    chooseAddressPhoto: `Chọn Bằng chứng về Địa chỉ Ảnh`,
    emailRequired: `Bạn cần một email để xác minh danh tính của bạn, hãy nhấp vào "Thay đổi Email"`,
    approved: `TÁN THÀNH`,
    rejected: `TỪ CHỐI`,
    pending: `Đang chờ`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Tên đầu tiên`,
      lastName: `tên họ`,
      street: `Địa chỉ`,
      city: `thành phố`,
      state: `Tiểu bang / Tỉnh`,
      postalCode: `Mã bưu điện`,
      country: `Chọn quốc gia`,
      phone: `Số điện thoại`,
      dob: `Ngày sinh (YYYY-MM-DD)`,
    },
    formErrors: {
      firstName: `Tên đầu tiên được yêu cầu`,
      lastName: `Họ được yêu cầu`,
      street: `Đường phố được yêu cầu`,
      city: `Thành phố được yêu cầu`,
      state: `Tiểu bang / Tỉnh được yêu cầu`,
      postalCode: `Postal Code là cần thiết`,
      country: `Đất nước là cần thiết`,
      phone: `Số điện thoại là cần thiết`,
      dob: `Ngày sinh là cần thiết`,
      general: `Hãy đảm bảo bạn đã điền tất cả các trường và kèm theo những bức ảnh đúng`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Biệt danh nên có ít nhất 3 ký tự.`,
      compositionViolation: `Biệt danh chỉ có thể bao gồm số và chữ thường.`,
      duplicationViolation: `Biệt danh đã được sử dụng`,
    },
    email: {
      compositionViolation: `Định dạng email không đúng`,
      duplicationViolation: `Email này đã được sử dụng`,
    },
    pin: {
      lengthViolation: `Mã PIN phải có ít nhất 4 ký tự.`,
      matchViolation: `Mã PIN phải trùng khớp.`,
      failedHashComparison: `Mã PIN không hợp lệ, xin vui lòng thử lại.`,
      updateSuccess: `Mã PIN đã được cập nhật`,
      updateError: `Có lỗi khi cập nhật mã PIN của bạn`,
    },
    mnemonic: {
      lengthViolation: `Gợi ý ghi nhớ nên có ít nhất 12 chữ.`,
      unableToValidate: `Các gợi ý đã nhập không hợp lệ, xin vui lòng thử lại.`,
    },
    setNickname: {
      success: `Đã lưu biệt danh.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Đã lưu email.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `Bạn phải nhập mã PIN sau`,
      bottom: `phút không kích hoạt`,
      update: `Cập nhật`,
      error: `Chúng tôi không thể cập nhật cài đặt tài khoản của bạn`,
      success: `Đã cập nhật Thời gian Timeout`,
    },
    addFriend: {
      success: X => `Yêu cầu kết bạn đã gởi đến @${X}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Đã gỡ bỏ khỏi danh sách bạn bè: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `Không thể lấy số dư Eth`,
      manage: `Quản lý ETH`,
    },
    sendEth: {
      error: {
        insufficient: `Bạn không có đủ ETH để thực hiện giao dịch này`,
        generic: `Có lỗi xảy ra khi chuyển tiền, vui lòng thử lại sau`,
        address: `Vui lòng nhập địa chỉ hợp lệ`,
        amount: `Vui lòng nhập số tiền lớn hơn 0`,
        limitExceeded: (A, M) => `Bạn chỉ có thể gởi ${CUR(A)} ${TL(A, M)} mỗi tuần, vui lòng chọn lựa số nhỏ hơn`
      },
      amount: `Số tiền gửi`,
      address: `Địa chỉ Gửi đến`,
      transfer: `Chuyển tiền ETH`,
      transferAll: `Chuyển hết`,
      balance: Y => `Số dư ETH hiện tại của bạn là ${typeof Y === 'string' ? Y.slice(0,8) :''}`,
      ethAddress: `Địa chỉ Ethereum`,
      transferLowercase: `Chuyển tiền Eth`,
      note: (A, M) => `Lưu ý: bạn chỉ có thể chuyển ${CUR(A)} ${TL(A, M)} mỗi tuần trên Lndr`,
      warning: (Z, A, M) => `Bạn còn lại ${CUR(A)}${Z} trong hạn mức ${CUR(A)} ${TL(A, M)}`,
    },
    sendERC20: {
      error: {
        insufficient: (name) => `Bạn không có đủ ${name} để thực hiện giao dịch này`,
        generic: `Có lỗi xảy ra khi chuyển tiền, vui lòng thử lại sau`,
      },
      transfer: (name) => `Chuyển tiền ${name}`,
      address: `Địa chỉ Gửi đến`,
      balance: (name, balance) => `Số dư ${name} hiện tại là ${typeof balance === 'string' ? balance.slice(0,8) :''}`,
      tokenAddress: (name) => `Địa chỉ ${name}`,
      txCost: (ethCost, currencyCost) => `Chi phí giao dịch: ${ethCost} ETH (${currencyCost})`,
    },
    panelHeaders: [
      `Wallet Địa chỉ`,
      `Số dư tài khoản Crypto`,
      `Xoá tài khoản`,
      `Lịch sử giao dịch ETH`,
      `Bật PayPal`,
      `Thay đổi tiền tệ chính`,
      `Mở khóa tính năng bổ sung`,
      `Thay đổi Email`,
      `Thay đổi mã PIN`,
      `Thay đổi Thời gian Timeout`,
      `Gợi ý`,
      `Thông báo`,
    ],
    viewEtherscan: `Xem Lịch sử Etherscan`,
    profilePic: {
      change: `Thay đổi Ảnh đại diện`,
      setError: `Có lỗi xảy ra khi tải hình ảnh, vui lòng thử lại sau`,
      getError: `Có lỗi xảy ra khi lấy ảnh đại diện`,
      setSuccess: `Đã cập nhật ảnh đại diện`,
    },
    logoutSuccess: `Bạn đã đăng xuất thành công!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: name => `Số dư ${name} hiện tại là`,

  welcomeView: {
    by: `ĐƯỢC XÂY DỰNG BỞI`,
    makeItEasy: `Lndr giúp bạn dễ dàng theo dõi các khoản nợ đơn giản`,
    weHelpFriends: `Giúp bạn và bạn bè của mình sống, làm việc, và giải trí cùng nhau.`,
    len: `Người`,
    dot: `.`,
    der: `cho mượn`,
    shareDinner: `Chia sẻ bữa tối`,
    fillTank: `Làm đầy két của bạn`,
    travelTogether: `Du lịch cùng nhau`,
    runEthereum: `Chúng tôi chạy trên ETH!`,
    firstLendingApp: `Ứng dụng di động về tín dụng đầu tiên được bảo mật trên blockchain.`,
    greatConcert: `Xem Buổi hòa nhạc hoành tráng`,
    youPlayWithFriends: `Bạn giải trí với bạn bè;\n chúng tôi sẽ lưu hóa đơn...`,
    start: `Bắt đầu`,
  },

  walkthrough: {
    skip: `nhảy`,
    continue: `tiếp tục`,
    step1: {
      easyToUse: `Lndr là cách dễ nhất để tách hóa đơn, chi phí chia sẻ và giải quyết nợ đơn giản với bạn bè và gia đình, tất cả được thực hiện một cách an toàn trên blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Để bắt đầu với Lndr, bạn sẽ cần phải thêm một người bạn.`,
      friendsScreen: `Tham quan những bè màn hình để tìm kiếm, thêm, hoặc mời bạn bè và gia đình của bạn để kết nối trên Lndr.`,
    },
    step3: {
      title: `Ghi một giao dịch`,
      easy: `Tách một hóa đơn hoặc thêm một món nợ với một người bạn rất dễ dàng trong Lndr!`,
      selectFriend: `Chọn bạn bè của bạn, đơn vị tiền tệ và số lượng.`,
      addMemo: `Thêm một số lưu ý trong hộp ghi nhớ và bấm Submit.`,
    },
    step4: {
      title: `Trả tiền`,
      ready: `Sẵn sàng trả tiền?`,
      payPal: `Khi đó là thời gian để giải quyết với Lndr, \n- bạn có thể chọn PayPal:`,
      ether: `- cryptocurrencies như Ether:`,
      cash: `- hoặc đơn giản là ghi lại một khu định cư bằng tiền mặt:`,
      positiveBalance: `10,46`,
    },
    step5: {
      title: `Đa tiền tệ`,
      multiCurrency: `Lndr có thể theo dõi các giao dịch của bạn ngay cả khi chúng xảy ra trong tiền tệ khác nhau.`,
      exchangeRate: `Khi bạn quyết định ngả Up với bạn bè của bạn, tất cả các giao dịch sẽ được chuyển đổi thành tiền tệ chính của bạn sử dụng hầu hết các tỷ giá hối đoái up-to-date sẵn.`,
      start: `Bắt đầu sử dụng Lndr!`,
    }
  },

  debtManagement: {
    shell: `Giao dịch mới`,
    add: `Thêm khoản nợ`,
    selectFriend: `Chọn`,
    lend: `Khoản vay mới`,
    borrow: `Khoản nợ mới`,
    owesMe: `Nợ tôi`,
    iOwe: `Tôi nợ`,
    iLent: `Một người bạn nợ tôi`,
    iBorrowed: `Tôi nợ một người bạn`,
    settleUpLower: `Trả tiền`,
    amountToSettle: `Số tiền thanh toán`,
    total: `Toàn bộ`,
    record: `ghi chép`,
    records: `ghi chép`,
    chooseCurrency: `Chọn một tệ`,

    createError: {
      amountTooLow: `Số tiền phải lớn hơn $0`,
      amountTooHigh: `Số tiền phải nhỏ hơn $1,000,000,000`,
      selfAsFriend: `Bạn không thể tạo khoản nợ với chính mình, hãy chọn một người bạn khác`,
      pending: `Hãy giải quyết giao dịch tồn động của bạn với người dùng này trước khi tạo thêm`,
      insufficientEth: E => `Bạn cần ít nhất ${E} ETH để thanh toán, đi đến Cài đặt để xem số dư của bạn`,
    },
    fields: {
      currency: `Tiền tệ`,
      amount: `Số tiền`,
      settlementAmount: `Số tiền thanh toán`,
      selectFriend: `Bạn bè`,
      memo: `Ghi chú`,
      direction: `Chọn Báo cáo Chính xác`,
    },
    memo: {
      example: `Nhập ghi chú tại đây`,
    },
    direction: {
      lend: X => `${X} nợ tôi`,
      borrow: X => `Tôi nợ ${X}`,
      initiatedLend: X => `${X} nói rằng anh ấy/cô ấy nợ`,
      initiatedBorrow: X => `${X} nói rằng bạn nợ`,
      pendingLend: X => `@${X} nợ bạn`,
      pendingBorrow: X => `Bạn nợ @${X}`,
      pendingLendSettlement: S => `@${S.debtorNickname} yêu cầu thanh toán bằng ${S.settlementCurrency}`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} muốn thanh toán với bạn bằng ${S.settlementCurrency}`,
      pendingLendSettlementMe: S => `Bạn đã yêu cầu thanh toán với @${S.debtorNickname} bằng ${S.settlementCurrency}`,
      pendingBorrowSettlementMe: S => `Bạn đã yêu cầu @${S.creditorNickname} thanh toán bằng ${S.settlementCurrency}`,
    },
    pending: {
      success: F => `Khoản nợ tồn động đã được gởi đến @${F.nickname}`,
      error: generalCommunicationError
    },
    pendingParens: `(đang chờ xử lý)`,
    confirmation: {
      transaction: CP => `Giao dịch với ${CP} đã được xác nhận thành công`,
      settlement: CP => `Thanh toán với ${CP} đã được xác nhận thành công`,
      error: `Không thể xác nhận giao dịch ở thời điểm hiện tại, vui lòng thử lại sau`,
    },
    rejection: {
      success: `Giao dịch đã bị từ chối`,
      error: `Không thể từ chối giao dịch ở thời điểm hiện tại, vui lòng thử lại sau`,
    },
    balances: {
      error: `Không thể tải số dư ở thời điểm hiện tại, vui lòng thử lại sau`,
    },
    for: M => `cho ${M}`,
    settleUp: `Trả tiền`,
    settleTotal: `Tổng số Thanh toán`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Thanh toán cho ' : 'Yêu cầu thanh toán cho'} ${A}`,
    recordSettleUpMemo: `đang thanh toán`,
    balanceByCurrency: `Chi tiết`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `Thanh toán ${X} không thành công do không đủ tiền`,
        generic: X => `Đã có lỗi xảy ra khi đang thực hiện thanh toán ${X}`,
      }
    },
    eth: `Thanh toán bằng ​​ETH`,
    erc20: name => `Settle with ${name}`,
    paypal: `Thanh toán bằng ​​PayPal`,
    nonPayment: `Ghi chép Thanh toán`,
    select: `Chọn Loại Settlement`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Trang chủ`,
    friends: `Bạn bè`,
    activity: `Hoạt động`,
  },

  notifications: {
    toggleNotifications: `Chuyển đổi Thông báo`,
    enable: `Bật`,
    disable: `Tắt`,
  },

  pendingTransactionsLanguage: {
    shell: `Giao dịch đang chờ xử lý`,
    title: `Đang chờ`,
    memo: `Ghi chú:`,
    for: `Cho`,
    none: `Bạn không có giao dịch đang chờ xử lý`,
    confirmationQuestion: `Bạn có chắc chắn muốn xác nhận giao dịch này?`,
    pendingAnnouncement: `Giao dịch này đang chờ xác nhận của bên còn lại.`,
    bilateral: `Đang chờ chuyển tiền hoàn tất`,
    confirm: `Xác nhận`,
    reject: `Từ chối Giao dịch`,
    rejectRequest: `Từ chối`,
    cancel: `Hủy Giao dịch`,
    direction: {
      lend: (X, Z) => `@${X} nợ bạn ${Z}`,
      borrow: (X, Z) => `Bạn nợ @${X} ${Z}`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Thanh toán đang chờ`,
    title: `Đang chờ`,
    none: `Bạn không có thanh toán đang chờ xử lý`,
    confirm: `Xác nhận`,
    reject: `Từ chối Thanh toán`,
    cancel: `Hủy bỏ Thanh toán`,
  },

  recentTransactionsLanguage: {
    title: `Hoàn tất`,
    none: `Bạn không có giao dịch đã hoàn tất`,
    direction: {
      lend: (X, Z) => `@${X} nợ bạn ${Z}`,
      borrow: (X, Z) => `Bạn nợ @${X} ${Z}`
    },
    balance: `Số dư`,
    consolidatedBalance: `Số dư`,
    friends: FS => `(từ ${FS} ${FS === 1 ? 'bạn bè' :'bạn bè'})`,
  },

  tabs: {
    home: `Trang chủ `,
    friends: `Bạn bè`,
    activity: `Hoạt động`,
  },

  confirmation: {
    shell: `Xác nhận`,
    done: `Hoàn tất`,
    create: {
      start: `Chúng tôi đã gửi bản ghi chép giao dịch đến `,
      end: ` để xác nhận.`,
    },
    confirm: {
      start: `Bạn đã xác nhận ghi chép này từ `,
      end: `.`,
    },
    reject: {
      start: `Chúng tôi đã thông báo cho `,
      end: ` biết bạn từ chối bản ghi này.`,
    },
    confirmFriend: {
      start: `Bạn đã kết bạn với `,
      end: `!`,
    },
    rejectFriend: {
      start: `Bạn đã từ chối yêu cầu kết bạn từ `,
      end: `.`,
    },
    rejectOutboundFriendRequest: {
      start: `Bạn đã hủy bỏ yêu cầu kết bạn đến `,
      end: `.`,
    },
    ethSent: {
      start: `Bạn đã gửi thành công `,
      end: ` ETH và mã hóa giao dịch của bạn là `,
    },
    erc20Sent: {
      start: `Bạn đã gửi thành công `,
      end: ` và mã hóa giao dịch của bạn là `,
    },
    requestPayPalPayee: {
      start: `Chúng tôi đã để cho `,
      end: ` biết rằng bạn muốn giải quyết với PayPal.`,
    },
    requestPayPalPayment: {
      start: `Chúng tôi đã để cho `,
      end: ` biết rằng bạn muốn được thanh toán bằng PayPal.`,
    },
    settledWithPayPal: {
      start: `Chúng tôi đã để cho `,
      end: ` biết rằng bạn đã giải quyết với PayPal.`,
    },
    kycSuccess: {
      start: `Cảm ơn bạn! Tài khoản của bạn đã được xác minh.

      `,
      end: `Bạn sẽ được thông báo khi các tính năng bổ sung của bạn được mở khóa.`
    },
    status: `Bạn có thể xem trạng thái của giao dịch này trong `,
    activity: `tab hoạt động.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Yêu cầu kết bạn`,
    message: `Yêu cầu kết bạn`,
    request: F => `@${F} muốn kết bạn với bạn!`,
    outbound: F => `Bạn đã gửi yêu cầu kết bạn đến @${F}`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `Bằng cách nhấp bên dưới, bạn xác nhận rằng bạn đã đọc và đồng ý với chính sách bảo mật của Blockmason. Blockmason có thể sử dụng địa chỉ email của bạn để gửi thông tin cập nhật về Blockmason và LNDR. Dưới đây là một liên kết đến chính sách bảo mật:`,
  },

  payPalLanguage: {
    connectPayPal: `Kết nối PayPal`,
    connectSuccess: `PayPal kích hoạt thành công.`,
    disconnectPayPal: `Ngắt kết nối PayPal`,
    disconnected: `PayPal bị ngắt kết nối.`,
    requestPayPalPayment: `Yêu cầu thanh toán PayPal`,
    sendWithPayPal: `Gửi Với PayPal`,
    enablePayPal: `Bật PayPal`,
    requestPayPalPayee: `Yêu cầu PayPal`,
    enablePayPalForFriend: F => `Cho phép PayPal cho phép @${F} trả you.`,
    friendNotEnabled: F => `@${F} chưa kích hoạt PayPal thanh toán.`,
    friendRequestedConnect: F => `@${F} muốn trả tiền cho bạn thông qua PayPal`,
    requestFriendConnect: F => `Bạn hỏi @${F} để cho phép PayPal`,
    feesNotification: `Không bao gồm lệ phí PayPal`,
    feesInformationHeader: `PayPal Thông tin Phí`,
    feesInformation: `1. Tài khoản PayPal của bạn phải được gắn với một tài khoản ngân hàng.
    
2. Thanh toán bằng đồng tiền khác với tiền tệ của ngân hàng sẽ phải chịu một khoản phí $ 0,35.

3. Phí chuyển quốc tế:
    Mỹ sang Canada / Châu Âu: $ 2.99
    Mỹ đến bất cứ nơi nào khác: $ 4.99

4. Các khoản phí này là không toàn diện. Để biết thông tin cập nhật mới nhất hãy truy cập vào:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Afghanistan`, code: 'AFG' },
    { name: `Albania`, code: 'ALB' },
    { name: `Algeria`, code: 'DZA' },
    { name: `Andorra`, code: 'AND' },
    { name: `Angola`, code: 'AGO' },
    { name: `Anguilla`, code: 'AIA' },
    { name: `Nam Cực`, code: 'ATA' },
    { name: `Antigua và Barbuda`, code: 'ATG' },
    { name: `Argentina`, code: 'ARG' },
    { name: `Armenia`, code: 'ARM' },
    { name: `Aruba`, code: 'ABW' },
    { name: `Châu Úc`, code: 'AUS' },
    { name: `Áo`, code: 'AUT' },
    { name: `Azerbaijan`, code: 'AZE' },
    { name: `Bahamas`, code: 'BHS' },
    { name: `Bahrain`, code: 'BHR' },
    { name: `Bangladesh`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Belarus`, code: 'BLR' },
    { name: `nước Bỉ`, code: 'BEL' },
    { name: `Belize`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `Bermuda`, code: 'BMU' },
    { name: `Bhutan`, code: 'BTN' },
    { name: `Bolivia`, code: 'BOL' },
    { name: `Bosnia và Herzegovina`, code: 'BIH' },
    { name: `Botswana`, code: 'BWA' },
    { name: `Brazil`, code: 'BRA' },
    { name: `Brunei`, code: 'BRN' },
    { name: `Bulgaria`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Burundi`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Campuchia`, code: 'KHM' },
    { name: `Cameroon`, code: 'CMR' },
    { name: `Canada`, code: 'CAN' },
    { name: `Quần đảo Cayman`, code: 'CYM' },
    { name: `Cộng hòa trung phi`, code: 'CAF' },
    { name: `cá hồng`, code: 'TCD' },
    { name: `Chile`, code: 'CHL' },
    { name: `Trung Quốc`, code: 'CHN' },
    { name: `Colombia`, code: 'COL' },
    { name: `Comoros`, code: 'COM' },
    { name: `Congo`, code: 'COG' },
    { name: `Congo`, code: 'COD' },
    { name: `Quần đảo cook`, code: 'COK' },
    { name: `Costa Rica`, code: 'CRI' },
    { name: `Côte d'Ivoire`, code: 'CIV' },
    { name: `Croatia`, code: 'HRV' },
    { name: `Cuba`, code: 'CUB' },
    { name: `Rượu cam bì`, code: 'CUW' },
    { name: `Síp`, code: 'CYP' },
    { name: `Cộng hòa Séc`, code: 'CZE' },
    { name: `Đan mạch`, code: 'DNK' },
    { name: `Djibouti`, code: 'DJI' },
    { name: `Dominica`, code: 'DMA' },
    { name: `Cộng hoà Dominicana`, code: 'DOM' },
    { name: `Ecuador`, code: 'ECU' },
    { name: `Ai Cập`, code: 'EGY' },
    { name: `El Salvador`, code: 'SLV' },
    { name: `Equatorial Guinea`, code: 'GNQ' },
    { name: `Eritrea`, code: 'ERI' },
    { name: `Estonia`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Ethiopia`, code: 'ETH' },
    { name: `Fiji`, code: 'FJI' },
    { name: `Phần Lan`, code: 'FIN' },
    { name: `Pháp`, code: 'FRA' },
    { name: `Guiana thuộc Pháp`, code: 'GUF' },
    { name: `French Polynesia`, code: 'PYF' },
    { name: `Gabon`, code: 'GAB' },
    { name: `Gambia`, code: 'GMB' },
    { name: `Georgia`, code: 'GEO' },
    { name: `nước Đức`, code: 'DEU' },
    { name: `Ghana`, code: 'GHA' },
    { name: `Gibraltar`, code: 'GIB' },
    { name: `Hy lạp`, code: 'GRC' },
    { name: `Greenland`, code: 'GRL' },
    { name: `Grenada`, code: 'GRD' },
    { name: `Guadeloupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Guinea`, code: 'GIN' },
    { name: `Guinea-Bissau`, code: 'GNB' },
    { name: `Guyana`, code: 'GUY' },
    { name: `Haiti`, code: 'HTI' },
    { name: `Vatican`, code: 'VAT' },
    { name: `Honduras`, code: 'HND' },
    { name: `Hồng Kông`, code: 'HKG' },
    { name: `Hungary`, code: 'HUN' },
    { name: `Iceland`, code: 'ISL' },
    { name: `Ấn Độ`, code: 'IND' },
    { name: `Indonesia`, code: 'IDN' },
    { name: `Iran`, code: 'IRN' },
    { name: `Iraq`, code: 'IRQ' },
    { name: `Ireland`, code: 'IRL' },
    { name: `Isle of Man`, code: 'IMN' },
    { name: `Israel`, code: 'ISR' },
    { name: `Ý`, code: 'ITA' },
    { name: `Jamaica`, code: 'JAM' },
    { name: `Nhật Bản`, code: 'JPN' },
    { name: `Jordan`, code: 'JOR' },
    { name: `Kazakhstan`, code: 'KAZ' },
    { name: `Kenya`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `Hàn Quốc (CHDCND Triều Tiên)`, code: 'PRK' },
    { name: `Hàn Quốc (Nam Hàn)`, code: 'KOR' },
    { name: `Kuwait`, code: 'KWT' },
    { name: `Kyrgyzstan`, code: 'KGZ' },
    { name: `Lào`, code: 'LAO' },
    { name: `Latvia`, code: 'LVA' },
    { name: `Lebanon`, code: 'LBN' },
    { name: `Lesotho`, code: 'LSO' },
    { name: `Liberia`, code: 'LBR' },
    { name: `Libya`, code: 'LBY' },
    { name: `Liechtenstein`, code: 'LIE' },
    { name: `nước Lithuania`, code: 'LTU' },
    { name: `Luxembourg`, code: 'LUX' },
    { name: `Macao`, code: 'MAC' },
    { name: `Macedonia`, code: 'MKD' },
    { name: `Madagascar`, code: 'MDG' },
    { name: `Malawi`, code: 'MWI' },
    { name: `Malaysia`, code: 'MYS' },
    { name: `Maldives`, code: 'MDV' },
    { name: `Mali`, code: 'MLI' },
    { name: `Malta`, code: 'MLT' },
    { name: `đảo Marshall`, code: 'MHL' },
    { name: `Martinique`, code: 'MTQ' },
    { name: `Mauritania`, code: 'MRT' },
    { name: `Mauritius`, code: 'MUS' },
    { name: `Mexico`, code: 'MEX' },
    { name: `Micronesia`, code: 'FSM' },
    { name: `Moldova`, code: 'MDA' },
    { name: `Monaco`, code: 'MCO' },
    { name: `Mông Cổ`, code: 'MNG' },
    { name: `Montenegro`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Morocco`, code: 'MAR' },
    { name: `Mozambique`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `Namibia`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepal`, code: 'NPL' },
    { name: `nước Hà Lan`, code: 'NLD' },
    { name: `New Caledonia`, code: 'NCL' },
    { name: `New Zealand`, code: 'NZL' },
    { name: `Nicaragua`, code: 'NIC' },
    { name: `Niger`, code: 'NER' },
    { name: `Nigeria`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Quần đảo Bắc Mariana`, code: 'MNP' },
    { name: `Na Uy`, code: 'NOR' },
    { name: `Oman`, code: 'OMN' },
    { name: `Pakistan`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Palestine`, code: 'PSE' },
    { name: `Panama`, code: 'PAN' },
    { name: `Papua New Guinea`, code: 'PNG' },
    { name: `Paraguay`, code: 'PRY' },
    { name: `Peru`, code: 'PER' },
    { name: `Philippines`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Ba Lan`, code: 'POL' },
    { name: `Bồ Đào Nha`, code: 'PRT' },
    { name: `Puerto Rico`, code: 'PRI' },
    { name: `Qatar`, code: 'QAT' },
    { name: `Sum họp`, code: 'REU' },
    { name: `Romania`, code: 'ROU' },
    { name: `Liên bang Nga`, code: 'RUS' },
    { name: `Rwanda`, code: 'RWA' },
    { name: `Saint Barthélemy`, code: 'BLM' },
    { name: `Saint Helena, Ascension và Tristan da Cunha`, code: 'SHN' },
    { name: `Saint Kitts và Nevis`, code: 'KNA' },
    { name: `Saint Lucia`, code: 'LCA' },
    { name: `Saint martin`, code: 'MAF' },
    { name: `Saint Pierre và Miquelon`, code: 'SPM' },
    { name: `Saint Vincent và Grenadines`, code: 'VCT' },
    { name: `Samoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `Sao Tome và Principe`, code: 'STP' },
    { name: `Ả Rập Xê-út`, code: 'SAU' },
    { name: `Senegal`, code: 'SEN' },
    { name: `Serbia`, code: 'SRB' },
    { name: `Seychelles`, code: 'SYC' },
    { name: `Sierra Leone`, code: 'SLE' },
    { name: `Singapore`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `Slovakia`, code: 'SVK' },
    { name: `Slovenia`, code: 'SVN' },
    { name: `Quần đảo Solomon`, code: 'SLB' },
    { name: `Somalia`, code: 'SOM' },
    { name: `Nam Phi`, code: 'ZAF' },
    { name: `phía nam Sudan`, code: 'SSD' },
    { name: `Tây Ban Nha`, code: 'ESP' },
    { name: `Sri Lanka`, code: 'LKA' },
    { name: `Sudan`, code: 'SDN' },
    { name: `Suriname`, code: 'SUR' },
    { name: `Thụy Điển`, code: 'SWE' },
    { name: `Thụy sĩ`, code: 'CHE' },
    { name: `Cộng Hòa Arab Syrian`, code: 'SYR' },
    { name: `Đài Loan`, code: 'TWN' },
    { name: `Tajikistan`, code: 'TJK' },
    { name: `Tanzania`, code: 'TZA' },
    { name: `nước Thái Lan`, code: 'THA' },
    { name: `Timor-Leste`, code: 'TLS' },
    { name: `Đi`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `xe nhẹ có hai bánh ở ấn độ`, code: 'TON' },
    { name: `Trinidad và Tobago`, code: 'TTO' },
    { name: `Tunisia`, code: 'TUN' },
    { name: `gà tây`, code: 'TUR' },
    { name: `Turkmenistan`, code: 'TKM' },
    { name: `Quần đảo Turks và Caicos`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Uganda`, code: 'UGA' },
    { name: `Ukraina`, code: 'UKR' },
    { name: `các Tiểu Vương Quốc Ả Rập Thống Nhất`, code: 'ARE' },
    { name: `Vương quốc Anh`, code: 'GBR' },
    { name: `nước Mỹ`, code: 'USA' },
    { name: `Các tiểu đảo xa của Hoa Kỳ`, code: 'UMI' },
    { name: `Uruguay`, code: 'URY' },
    { name: `Uzbekistan`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Việt Nam`, code: 'VNM' },
    { name: `Quần đảo British Virgin`, code: 'VGB' },
    { name: `US Virgin Islands`, code: 'VIR' },
    { name: `Phía tây Sahara`, code: 'ESH' },
    { name: `Yemen`, code: 'YEM' },
    { name: `Zambia`, code: 'ZMB' },
    { name: `Zimbabwe`, code: 'ZWE' },
  ]
}
