import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { Iurl } from "./url";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Transformers';
    imageWidth: number = 70;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Optimus Prime",
            "productCode": "Autobots",
            "description": " Optimus Prime was created as the Autobots leader, though it is unknown if he was created or his origins. In a possible future, Megatron was threatened by the existence of the Aerialbots and had Shockwave build a time machine to send them back in time to get rid of them. However, he only ended up changed history for the better. In the revised timeline, Optimus Prime began his life as a robot named Orion Pax, a mostly defenseless dock worker during the Golden Age of Cybertron nine million years ago, with a girlfriend named Ariel and a best friend named Dion. During this time, a new breed of robot with new flight capabilities appeared on the planet that Orion idolized. When Megatron, the leader of the new group of robots, approached him with inquiries about using one of the dock warehouses, Orion was swayed by Megatron. Both Orion and Ariel were severely wounded when Megatron and his forces attacked in order to claim the energy stored there. Searching for someone to help them, the time-displaced Aerialbots took Orion and Ariel to the ancient Autobot, Alpha Trion, who used them as the first subjects for the new reconstruction process he had developed involving rebuilding the frail Autobot frames into more battle-hardy configurations.",
            "imageUrl": "https://vignette1.wikia.nocookie.net/transformers/images/1/1f/33562114415_c1d1cbbbca_b.jpg/revision/latest/scale-to-width-down/310?cb=20170417112650",
           // "buyUrl": "http://www.amazon.in/Transformers-Revenge-RA-01-Optimus-Action/dp/B001ULCI8U"
        },
        {
            "productId": 2,
            "productName": "Iron Hide",
            "productCode": "Autobots",  
            "description": "In the 2007 Transformers live action film, Ironhide appears as a modified GMC Topkick C4500 pickup truck, replacing Arcee in the cast list. Peter Cullen, who provided the voices for both Optimus Prime and Ironhide in the original animated series, does not voice Ironhide in the film. In the film, Ironhide is described as being Optimus Prime's oldest friend and the weapons specialist of the team. He is a tough soldier who has sustained many injuries. His right eye has a large scar surrounding it. Before arriving on Earth, he sustained a broken ankle. According to the tech specifications of his toy, he was built during the Battle of Tyger Pax and is one of the oldest Autobots. His weapons included shell cannons mounted on both of his arms. In Dark of the Moon, he has a new rifle and a new rocket launcher invented by Que/Wheeljack. Despite his advanced age and extra bulk, Ironhide revealed himself to be an extremely agile and formidable opponent - He managed to helix twist over a screaming woman in the street at high speed while firing both wrist mounted weapons, and was seen engaging and withstanding assaults from Brawl, Starscream, Blackout, Bonecrusher and Crowbar. He is amongst the most powerful Autobots, exceeded only by Optimus Prime, Sentinel Prime and Jetfire.",
            "imageUrl": "http://tfwiki.net/mediawiki/images2/thumb/c/c6/Movie_Ironhide_promorender2.jpg/400px-Movie_Ironhide_promorender2.jpg",
           // "buyUrl": "http://www.amazon.in/Transformers-Dark-MechTech-Voyager-Ironhide/dp/B004FEHLF4"
        },
        {
            "productId": 3,
            "productName": "Sentinel Prime",
            "productCode": "Decepticons",
            "description": "Sentinel Prime (sometimes formerly called Sentinel Major) is an Autobot leader from the Generation 1 continuity family. Sentinel Prime is an imposing figure, standing head and shoulders over the average Autobot. Bristling with some of the most heavy-duty weapons and armor available to the Autobot army has instilled in Sentinel Prime a supreme confidence in his own abilities as both a leader and a fighter. Unfortunately such pride usually precedes a fall, and there will always be someone out there keen to prove a point, or who merely sees Sentinel Prime as an obstacle on the path to a bigger destiny. Sentinel Prime is often portrayed as Optimus Prime's immediate predecessor as Autobot leader.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/DOTMSentinelPrime.jpg/220px-DOTMSentinelPrime.jpg",
           // "buyUrl": "http://www.amazon.in/Transformers-MechTech-Leader-Sentinel-Prime/dp/B004FEJ43Q"
        },
        {
            "productId": 4,
            "productName": "Smoke Screen ",
            "productCode": "Autobots",
            "description": "Smokescreen first appeared in issue 14 of the Marvel Transformers comic. Here, he was brought to life alongside Grapple, Hoist, Skids and Tracks via the downloading of their personalities and Sparks from storage. Bumblebee took all but Grapple on a tour of the surrounding area—but ended up in a trial by fire when the Decepticons tried to steal sonic energy from a rock concert. The group battled Starscream, Skywarp and Thundercracker, defeating them, but left when the humans accused them of sabotaging the concert.",
            "imageUrl": "http://tfwiki.net/mediawiki/images2/thumb/9/90/FAB-Smokescreen-art.jpg/300px-FAB-Smokescreen-art.jpg",
           // "buyUrl": "http://www.amazon.in/Transformers-Hunters-Deluxe-Smokescreen-Figure/dp/B00A92GMEC"
        },
        {
            "productId": 5,
            "productName": "Megatron",
            "productCode": "Decepticons" ,
            "description": "Megatron is usually depicted as having risen up from the lowly worker to become a champion in gladiatorial combat.[2] As a gladiator, he took the legendary name Megatronus as his own and would similarly inspire a later villainous character. He called for an end to his planet Cybertron's corrupted governing body and told the downtrodden that freedom of self-determination was the right of all sentient beings, becoming a mentor to the young Optimus Prime. Prime would later use his teachings against him when he became corrupt. He has the ability to transform between his robot shape and various weapons or vehicles, but these alternate-modes, his origins and even personality, can vary depending on which  universe  he's seen in. This origin is considered the most consistent between the various incarnations.",
            "imageUrl": "http://vignette1.wikia.nocookie.net/bioniclecrossovers/images/7/7f/Megatron.jpg/revision/latest?cb=20100605052532",
          //  "buyUrl": "http://www.amazon.in/Transformers-Generations-Deluxe-Megatron-Action/dp/B00CX5XCUK"
        }
             
    ];
    // urls: Iurl[]=[
    //     {"url": "http://www.amazon.in/Transformers-Revenge-RA-01-Optimus-Action/dp/B001ULCI8U"},
    //     {"url": "http://www.amazon.in/Transformers-Dark-MechTech-Voyager-Ironhide/dp/B004FEHL-DOTMSentinelPrime.jpg"},
    //     {"url": "http://www.amazon.in/Transformers-Revenge-RA-01-Optimus-Action/dp/B001ULCI8U"},
    //     {"url": ""} ,
    //     {"url": "http://www.amazon.in/Transformers-Revenge-RA-01-Optimus-Action/dp/B001ULCI8U"},

    // ]

    // constructor(private _productService: ProductService) {

    // }
urls: string[]=["ab","wdc","we","wec","dwce"];






    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
         
    }
}
