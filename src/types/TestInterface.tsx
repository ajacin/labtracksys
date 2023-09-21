export type TestResponse = {
  data: Test[];
};

export type Test = {
  _id?: string;
  name?: string;
  description?: string;
  resultType?: null | string;
  unit?: null | string;
  minRange?: number | null;
  maxRange?: number | null;
  pregnancyMinRange?: number | null;
  pregnancyMaxRange?: number | null;
  femaleMinRange?: number | null;
  femaleMaxRange?: number | null;
  maleMinRange?: number | null;
  maleMaxRange?: number | null;
  childMinRange?: number | null;
  childMaxRange?: number | null;
  newBornMinRange?: number | null;
  newBornMaxRange?: number | null;
  newBornMaxAgeMonths?: number | null;
  childMaxAge?: number | null;
  resultStrings?: string[] | null;
  createdBy?: null | string;
  __v?: number;
};
