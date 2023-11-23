#include <stdio.h>
int main()
/*

case 1:  kms to miles 
case 2:  inches to foot 
case 3:  cms to inches 
case 4:  pound to kgs
case 5:  inches to meters

*/
{
    float kmstomiles = 0.621371;
    float inchestofoot = 0.0833333;
    float cmstoinches = 0.393701;
    float poundtokgs = 0.453592;
    float inchestometers = 0.0254;
    char input;
    float first, second;

    while (1)
    {
        printf(" q for quit\n 1.For kms to miles\n 2.For inches to foot\n 3.For cms to inche\n 4.For pound to kgs\n 5.For inches to meters\n");
        scanf(" %c", &input);
        
        switch (input)
        {
        case 'q':
            printf("The Progrram is qutting.......\n");
            goto end;
            break;
        case '1':
            printf("Enter quantity in parts of first unit\n");
            scanf("%f", &first);
            second = first * kmstomiles;
            printf("Their is %.2f miles in %.2f kms\n\n\n\n", second, first);
            break;
        case '2':
            printf("Enter quantity in parts of first unit\n");
            scanf("%f", &first);
            second = first * inchestofoot;
            printf("Their is %.2f foot in %.2f inches\n\n\n\n", second, first);
            break;
        case '3':
            printf("Enter quantity in parts of first unit\n");
            scanf("%f", &first);
            second = first * cmstoinches;
            printf("Their is %.2f inches in %.2f cms\n\n\n\n", second, first);
            break;
        case '4':
            printf("Enter quantity in parts of first unit\n");
            scanf("%f", &first);
            second = first * poundtokgs;
            printf("Their is %.2f kgs in %.2f pound\n\n\n\n", second, first);
            break;
        case '5':
            printf("Enter quantity in parts of first unit\n");
            scanf("%f", &first);
            second = first * inchestometers;
            printf("Their is %.2f meters in %.2f inches\n\n\n\n", second, first);
            break;
        
        default:
            break;
        }

    }
    end:

    return 0;
}
