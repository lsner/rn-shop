export default function logObj(object) {
  let description='';

  for(let i in object) {

    description += i + '= '+object[i] + ';';
  }
  return description

}