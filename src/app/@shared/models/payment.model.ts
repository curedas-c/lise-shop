export type PaymentOptions =
  | {
      type: 'mobile_money';
      mobileMoneyPhoneNumber: string;
    }
  | {
      type: 'card';
      cardOwnerName: string;
      cardNumber: string;
      cardExpirationDate: string;
      cardCode: string;
    };
