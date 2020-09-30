import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { EventData } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { CountryService } from "../../services/country.service";
import { UserService } from "../../services/user.service";

@Component({
    moduleId: module.id,
    selector: "ns-register",
    templateUrl: "register.component.html",
    providers: [UserService, CountryService]
})
export class RegisterComponent implements OnInit {
    public input: any;

    public constructor(private location: Location, private countryService: CountryService, private userService: UserService) {
        this.input = {
            "email":"",
            "password":"",
            "validPassword":"",
            "defaultCountry":"",
            "name":""
        }
    }

    ngOnInit() {
        this.loadCountries();
    }

    loadCountries() {
        this.countryService.getCountries().subscribe((result) => {
            this.onGetCountriesSuccess(result);
        }, (error) => {
            console.log(error);
        })
    }

    private onGetCountriesSuccess(res) {
        this.countries = res.map(country => country.name);
    }

    public register() {
        this.userService.register(this.input);
    }

    public countries: Array<string> = [];

    public onSelectedIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        this.input.defaultCountry = this.countries[picker.selectedIndex];
    }
}
