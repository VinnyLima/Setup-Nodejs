import {User} from "@models/User";

test('it shoud be ok ', () => {
    const user = new User();

    user.name = 'Paulo lima';

    expect(user.name).toEqual('Paulo lima');
});