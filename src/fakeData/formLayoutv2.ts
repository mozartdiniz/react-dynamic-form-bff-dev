export interface IFormPage {
  caption?: string;
  items: IFormItem[];
  label: string;
  type: string;
}

export interface IFormItem {
  caption?: string;
  dataQaId?: string;
  isChecked?: boolean;
  isRequired?: boolean;
  items?: IFormItem[];
  label?: string;
  name?: string;
  placeholder?: string;
  type: string;
  value?: string;
}

export type IFormLayout = IFormPage[];

const layout: IFormLayout = [
  {
    type: 'form-page',
    label: 'form_label_enter_your_details',
    items: [
      {
        type: 'email-field',
        label: 'form_label_email_address',
        name: 'email',
        isRequired: true
      },
      {
        type: 'select-field',
        label: 'form_label_person_salutation',
        name: 'salutation',
        dataQaId: 'registration_title_dropdown',
        isRequired: true,
        items: [
          {
            type: 'select-field-option',
            label: 'form_data_person_salutation_select',
            value: ''
          },
          {
            type: 'select-field-option',
            label: 'form_data_person_salutation_miss',
            value: 'Miss'
          },
          {
            type: 'select-field-option',
            label: 'form_data_person_salutation_mrs',
            value: 'Mrs'
          },
          {
            type: 'select-field-option',
            label: 'form_data_person_salutation_ms',
            value: 'Ms'
          },
          {
            type: 'select-field-option',
            label: 'form_data_person_salutation_mr',
            value: 'Mr'
          },
          {
            type: 'select-field-option',
            label: 'form_data_person_salutation_dr',
            value: 'Dr'
          },
          {
            type: 'select-field-option',
            label: 'form_data_person_salutation_prof',
            value: 'Prof'
          }
        ]
      },
      {
        type: 'text-field',
        label: 'form_label_first_name',
        name: 'firstName',
        dataQaId: 'registration_firstName_textInput'
      },
      {
        type: 'text-field',
        label: 'form_label_surname',
        name: 'surname',
        dataQaId: 'registration_surname_textInput'
      },
      {
        type: 'date-field',
        label: 'form_label_date_field',
        caption: 'form_caption_date_field',
        items: [
          {
            type: 'select-field',
            label: '',
            name: 'dobDay',
            dataQaId: 'dateOfBirth_day_dropdown',
            items: [
              {
                type: 'select-field-option',
                label: 'form_data_bday_day',
                value: ''
              },
              {
                type: 'select-field-option',
                label: '1',
                value: '1'
              },
              {
                type: 'select-field-option',
                label: '2',
                value: '1'
              }
            ]
          },
          {
            type: 'select-field',
            label: '',
            name: 'dobMonth',
            dataQaId: 'dateOfBirth_month_dropdown',
            items: [
              {
                type: 'select-field-option',
                label: 'form_data_bday_month',
                value: ''
              },
              {
                type: 'select-field-option',
                label: 'date_january_short',
                value: 'JANUARY'
              },
              {
                type: 'select-field-option',
                label: 'date_january_short',
                value: 'FEBRUARY'
              }
            ]
          },
          {
            type: 'select-field',
            label: '',
            name: 'dobYear',
            dataQaId: 'dateOfBirth_year_dropdown',
            items: [
              {
                type: 'select-field-option',
                label: 'form_data_bday_year',
                value: ''
              },
              {
                type: 'select-field-option',
                label: '2001',
                value: '2001'
              },
              {
                type: 'select-field-option',
                label: '2002',
                value: '2002'
              }
            ]
          }
        ]
      },
      {
        type: 'radiogroup-field',
        label: 'form_label_gender',
        items: [
          {
            type: 'radio-field',
            label: 'form_label_gender_female',
            value: 'FEMALE',
            dataQaId: 'registration_femaleGenderOption_radioButton',
            isChecked: true
          },
          {
            type: 'radio-field',
            label: 'form_label_gender_male',
            value: 'MALE',
            dataQaId: 'registration_maleGenderOption_radioButton',
            isChecked: false
          }
        ]
      }
    ]
  },
  {
    type: 'form-page',
    label: 'form_label_create_username',
    caption: 'form_caption_create_username',
    items: [
      {
        type: 'username-field',
        label: 'form_label_username',
        isRequired: true,
        items: [
          {
            type: 'text-field',
            label: '',
            name: 'userName'
          },
          {
            type: 'button',
            label: 'form_label_create_username_check_button',
            name: 'checkUsernameButton'
          }
        ]
      },
      {
        type: 'password-field',
        label: 'form_label_password',
        name: 'password',
        isRequired: true
      },
      {
        type: 'password-field',
        label: 'form_label_confirm_password',
        name: 'confirmPassword',
        isRequired: true
      }
    ]
  },
  {
    type: 'form-page',
    label: 'form_label_contact_e_security',
    items: [
      {
        type: 'search-address-field',
        label: 'form_label_search_address',
        placeholder: 'form_placeholder_search_address',
        name: 'addressQuery',
        isRequired: false
      },
      {
        type: 'phone-number-field',
        label: 'form_label_phone_number',
        isRequired: true,
        items: [
          {
            type: 'select-field',
            label: '',
            name: 'phoneType',
            items: [
              {
                type: 'select-field-option',
                label: 'form_label_phone_number_mobile',
                value: 'MOBILE'
              },
              {
                type: 'select-field-option',
                label: 'form_label_phone_number_landline',
                value: 'HOME'
              },
              {
                type: 'select-field-option',
                label: 'form_label_phone_number_work',
                value: 'WORK'
              }
            ]
          },
          {
            type: 'tel-field',
            name: 'phoneNumber',
            isRequired: true
          }
        ]
      },
      {
        type: 'text-field',
        label: 'form_label_security_answer',
        caption: 'form_caption_security_answer',
        name: 'securityAnswer',
        isRequired: true
      },
      {
        type: 'text-field',
        label: 'form_label_referrer_member_name',
        caption: 'form_caption_referrer_member_name',
        name: 'referrerMemberName',
        isRequired: false
      },
      {
        type: 'promotional-code-field',
        label: 'form_label_promotional_code',
        caption: 'form_caption_promotional_code',
        isRequired: false,
        items: [
          {
            type: 'text-field',
            name: 'promotionalCode'
          },
          {
            type: 'button',
            label: 'form_label_phone_number_landline'
          }
        ]
      }
    ]
  }
];
