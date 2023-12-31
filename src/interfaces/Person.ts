export interface Person {
    userId: string,
    name: string,
    kanaName: string,
    dateOfBirth: string,
    age: number,
    dateOfDeath: string;
    timeOfDeath: string;
    placeOfDeath: string;
    gender: string,
    facilities: string,
    userIdWithName?: string,
    birthday?: string,
    deathday?: string,
    deathTime?: string,
    zip_code?: string,
    address1?: string,
    address2?: string,
    address3?: string,
    phone_number?: string,
    fax_number?: string,
    cellphone_number?: string,
    mail_address?: string,
    career?: string,
    inst?: string,
    person_in_charge?: string,
    person_symbol?: string,
    long_1?: string,
    long_2?: string,
    long_3?: string,
    long_4?: string,
    long_5?: string,
    long_6?: string,
    insured?: string,
    business?: string,
    insu?: string,
    onway_time?: string,
    visit_site?: string,
    collect_money?: string,
    contact_zip1?: string,
    contact_zip2?: string,
    contact_address_1?: string,
    contact_address_2?: string,
    contact_address_3?: string,
    contact_phone?: string,
    contact_fax?: string,
    satellite?: string,
    remarks?: string,
    inscription_name?: string,
    inscription_kata_name?: string,
    inscription_address?: string,
    obfuscation?: string,
}

export interface RenderName {
    name?: string,
    kanaName?: string,
    address?: string,
}

export const toPersonScale = (persons: Person[]) => {

    const listResult: Person[] = [];
    for (let i = 0; i < persons.length; i++) {
        const Person: Person = {
            userId: persons[i].userId,
            name: persons[i].name,
            kanaName: persons[i].kanaName,
            dateOfBirth: persons[i].dateOfBirth + '(' + persons[i].age + ')',
            age: persons[i].age,
            dateOfDeath: persons[i].dateOfDeath,
            timeOfDeath: persons[i].timeOfDeath,
            placeOfDeath: persons[i].placeOfDeath,
            gender: persons[i].gender,
            facilities: persons[i].facilities,
            userIdWithName: '[' + persons[i].userId + '] ' + persons[i].name,
            // birthday: persons[i].birthday,
            deathday: persons[i].deathday,
            deathTime: persons[i].deathTime,
            zip_code: persons[i].zip_code,
            address1: persons[i].address1,
            address2: persons[i].address2,
            address3: persons[i].address3,
            phone_number: persons[i].phone_number,
            fax_number: persons[i].fax_number,
            cellphone_number: persons[i].cellphone_number,
            mail_address: persons[i].mail_address,
            career: persons[i].career,
            inst: persons[i].inst,
            person_in_charge: persons[i].person_in_charge,
            insu: persons[i].insu,
            onway_time: persons[i].onway_time,
            visit_site: persons[i].visit_site,
            collect_money: persons[i].collect_money,
            contact_zip1: persons[i].contact_zip1,
            contact_zip2: persons[i].contact_zip2,
            contact_address_1: persons[i].contact_address_1,
            contact_address_2: persons[i].contact_address_2,
            contact_address_3: persons[i].contact_address_3,
            contact_phone: persons[i].contact_phone,
            contact_fax: persons[i].contact_fax,
            satellite: persons[i].satellite,
            remarks: persons[i].remarks,
        }
        listResult.push(Person);
    }
    return listResult;
}
