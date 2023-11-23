#include <stdio.h>

/*

case 1:  kms to miles
case 2:  inches to foot
case 3:  cms to inches
case 4:  pound to kgs
case 5:  inches to meters

*/

int main(int argc, char const *argv[])
{
    int num;
    float unit1;
    float a = 1.609344;
    float unit2;
    float b = 12;
    float unit3;
    float c = 2.54;
    float unit4;
    float d = 2.205;
    float unit5;
    float e = 39.37;

    for (int i = 0; i < 11; i++)
    {

        for (int j = 0; j < 11; j++)
        {

            printf("For kms to miles (press 1)\n");
            printf("For inches to foot (press 2)\n");
            printf("For cms to inches (press 3)\n");
            printf("For pounds to kgs (press 4)\n");
            printf("For inches to meters (press 5)\n");
            printf("For Exit (press 0)\n");
            printf("Enter What type of coversions do you want?\n");
            scanf("%d", &num);
            if (num==0)
            {
                goto end;
            }
            else if (num>5)
            {
                goto end;
            }

            switch (num)
            {
            case 1:

                printf("Enter How many kms you want to convert into miles?\n");
                scanf("%f", &unit1);

                printf("Their is %f miles in %f kms.\n", unit1 / a, unit1);
                printf("\n");
                break;

            case 2:
                printf("Enter How many inches you want to convert into foot?\n");
                scanf("%f", &unit2);

                printf("Their is %f foot in %f inches.\n", unit2 / b, unit2);
                printf("\n");
                break;
            case 3:
                printf("Enter How many cms you want to convert into inches?\n");
                scanf("%f", &unit3);

                printf("Their is %f inches in %f cms.\n", unit3 / c, unit3);
                printf("\n");
                break;
            case 4:
                printf("Enter How many pounds you want to convert into kgs?\n");
                scanf("%f", &unit4);

                printf("Their is %f kgs in %f pounds.\n", unit4 / d, unit4);
                printf("\n");
                break;
            case 5:
                printf("Enter How many inches you want to convert into meters?\n");
                scanf("%f", &unit5);

                printf("Their is %f meters in %f inches.\n", unit5 / e, unit5);
                printf("\n");
                break;

            }
        }

    }

    end:

    return 0;
}

//Done :]


